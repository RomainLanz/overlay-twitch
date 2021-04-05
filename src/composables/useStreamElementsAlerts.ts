import io from 'socket.io-client';
import { v4 as uuid } from '@lukeed/uuid';
import { onBeforeUnmount, ref } from 'vue';
import { OverlayEvents } from '../types/OverlayEvent';
import { EventType, StreamElementsEvents, StreamElementsTestEvents, TestEventType } from '../types/StreamElementsEvent';

const eventName = String(import.meta.env.VITE_STREAMELEMENTS_EVENT);

const socket = io('https://realtime.streamelements.com', {
	transports: ['websocket'],
});

socket.on('connect', () => {
	socket.emit('authenticate', {
		method: 'jwt',
		token: String(import.meta.env.VITE_STREAMELEMENTS_SOCKET_JWT),
	});
});

export const testTypeMap: Record<StreamElementsTestEvents['listener'], StreamElementsEvents['type']> = {
	'follower-latest': 'follow',
	'subscriber-latest': 'subscriber',
	'host-latest': 'host',
	'raid-latest': 'raid',
	'cheer-latest': 'cheer',
};

const wantTestEvent = true;

export function isTestEvent(event: StreamElementsEvents | StreamElementsTestEvents): event is StreamElementsTestEvents {
	return event.hasOwnProperty('listener');
}

export function convertTestType(type: StreamElementsTestEvents['listener']): StreamElementsEvents['type'] {
	return testTypeMap[type];
}

export function alertCreator(uuid: string, message: StreamElementsEvents | StreamElementsTestEvents): any {
	if (isTestEvent(message)) {
		return {
			...message.event,
			uuid,
			type: convertTestType(message.listener),
		};
	}

	return {
		...message.data,
		uuid,
		type: message.type,
	};
}

export function useStreamElementsAlerts(duration = 6000) {
	const alerts = ref<OverlayEvents[]>([]);

	function onEvent(message: StreamElementsEvents | StreamElementsTestEvents) {
		console.log(message);

		if (
			(isTestEvent(message) && !wantTestEvent) ||
			(isTestEvent(message) && !TestEventType.includes(message.listener))
		) {
			return;
		}

		if (!isTestEvent(message) && !EventType.includes(message.type)) {
			return;
		}

		const id = uuid();
		alerts.value = [alertCreator(id, message), ...alerts.value];

		setTimeout(() => {
			alerts.value = alerts.value.filter((alert) => alert.uuid !== id);
		}, duration);
	}

	socket.on(eventName, onEvent);

	if (wantTestEvent) {
		socket.on('event:test', onEvent);
	}

	onBeforeUnmount(() => {
		socket.off(eventName, onEvent);

		if (wantTestEvent) {
			socket.off('event:test', onEvent);
		}
	});

	return alerts;
}
