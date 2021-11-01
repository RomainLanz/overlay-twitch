<template>
	<Alert>
		<p v-if="alert.gifted">
			Merci à <strong class="text-sub">{{ alert.sender }}</strong> pour le GiftSub à
			<strong class="text-sub">{{ alert.displayName }}</strong> !
		</p>
		<p v-else>
			Merci pour l'abonnement <strong class="text-sub">{{ alert.displayName }}</strong> !
		</p>
		<q v-if="alert.message && !alert.gifted" class="font-bold">
			{{ alert.message }}
		</q>
	</Alert>
</template>

<script name="SubscriptionAlert" lang="ts" setup>
	import Alert from './Alert.vue';
	import type { PropType } from 'vue';
	import type { OverlaySubscriberEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/spooky-subscription.mp3');

	defineProps({
		alert: {
			type: Object as PropType<OverlaySubscriberEvent>,
			required: true,
		},
	});

	onMounted(() => {
		sound.play();
	});
</script>
