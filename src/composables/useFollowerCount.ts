import delve from 'dlv';
import { ref, watchEffect } from 'vue';
import { useTwitchEndpoint } from './useTwitchEndpoint';

export function useFollowerCount() {
	const followers = ref(0);
	const data = useTwitchEndpoint();

	watchEffect(() => {
		if (!data) {
			return;
		}

		followers.value = delve(data, 'value.streams[0].channel.followers', 0);
	});

	return followers;
}
