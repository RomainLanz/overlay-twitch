import delve from 'dlv';
import { ref, watchEffect } from 'vue';
import { useTwitchEndpoint } from './useTwitchEndpoint';

export function useViewerCount() {
	const viewers = ref(0);
	const data = useTwitchEndpoint();

	watchEffect(() => {
		if (!data) {
			return;
		}

		viewers.value = delve(data, 'data.value.streams[0].viewers', 0);
	});

	return viewers;
}
