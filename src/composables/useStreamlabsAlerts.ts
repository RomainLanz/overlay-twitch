import io from 'socket.io-client';
import { onBeforeUnmount, ref } from 'vue';
import { getUrlParam } from '../utils/getKey';
import { OverlayAlert } from '../types/OverlayAlert';
import { StreamlabsDonationEvent, StreamLabsTwitchEvent, StreamLabsEvent } from '../types/Streamlabs';

const streamlabToken = getUrlParam('socket', import.meta.env.VITE_STREAMLABS_SOCKET_KEY);
const streamlabs = io(`https://sockets.streamlabs.com?token=${streamlabToken}`, {
	transports: ['websocket'],
});

function isStreamlabsSpecialEvent(event: StreamLabsEvent): event is StreamlabsDonationEvent {
	return !event.hasOwnProperty('for');
}

function isForTwitchEvent(event: StreamLabsEvent): event is StreamLabsTwitchEvent {
	return 'for' in event && event.for === 'twitch_account';
}

function shouldBeHandled(event: StreamLabsEvent): event is StreamlabsDonationEvent | StreamLabsTwitchEvent {
	return isStreamlabsSpecialEvent(event) || isForTwitchEvent(event);
}

export function useStreamlabsAlert(duration: number = 10000) {
	const alerts = ref<OverlayAlert[]>([]);

	function onEvent(event: StreamLabsEvent): void {
		if (!shouldBeHandled(event)) {
			return;
		}

		/**
		 * @see https://github.com/microsoft/TypeScript/issues/36390
		 */
		const normalizedEvents = (event.message as any).map((message: object) => ({
			type: event.type,
			...message,
		})) as OverlayAlert[];

		alerts.value = [...normalizedEvents, ...alerts.value];

		setTimeout(() => {
			alerts.value = alerts.value.filter((a) => a._id !== normalizedEvents[0]._id);
		}, duration);
	}

	streamlabs.on('event', onEvent);

	onBeforeUnmount(() => {
		streamlabs.off('event', onEvent);
	});

	return alerts;
}
