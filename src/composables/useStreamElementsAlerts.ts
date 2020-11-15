import io from 'socket.io-client';
import { v4 as uuid } from '@lukeed/uuid';
import { onBeforeUnmount, ref } from 'vue';
import { OverlayEvents } from '../types/OverlayEvent';
import { EventType, StreamElementsEvents } from '../types/StreamElementsEvent';

const eventName = import.meta.env.VITE_STREAMELEMENTS_EVENT;

const socket = io('https://realtime.streamelements.com', {
	transports: ['websocket'],
});

socket.on('connect', () => {
	socket.emit('authenticate', {
		method: 'jwt',
		token: import.meta.env.VITE_STREAMELEMENTS_SOCKET_JWT,
	});
});

export function useStreamElementsAlerts(duration = 6000) {
	const alerts = ref<OverlayEvents[]>([]);

	function onEvent(message: StreamElementsEvents) {
		if (!EventType.includes(message.listener)) {
			return;
		}

		const id = uuid();
		alerts.value = [{ uuid: id, ...message }, ...alerts.value];

		setTimeout(() => {
			alerts.value = alerts.value.filter((alert) => alert.uuid !== id);
		}, duration);
	}

	socket.on(eventName, onEvent);

	onBeforeUnmount(() => {
		socket.off(eventName, onEvent);
	});

	return alerts;
}
