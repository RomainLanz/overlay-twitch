import { ref, watchEffect } from 'vue';
import { useTwitchEndpoint } from './useTwitchEndpoint';

export function useFollowerCount() {
	const followers = ref(0);
	const data = useTwitchEndpoint();

	watchEffect(() => {
		followers.value = data?.value?.streams[0].channel.followers || 0;
	});

	return followers;
}
