import _ from 'lodash';
import { ref, watchEffect } from 'vue';
import { useAccessToken } from './useAccessToken';
import { useSecureTwitchEndpoint } from './useSecureTwitchEndpoint';

export function useSubscriberCount() {
	const subscribers = ref(0);
	const data = useSecureTwitchEndpoint(useAccessToken());

	watchEffect(() => {
		if (!data) {
			return;
		}

		subscribers.value = _.get(data.value, 'data.length', 1) - 1;
	});

	return subscribers;
}
