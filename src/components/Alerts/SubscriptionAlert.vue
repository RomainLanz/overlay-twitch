<template>
	<Alert>
		<p v-if="alert.event.gifted">
			Merci à <strong class="text-sub">{{ alert.event.sender }}</strong> pour le GiftSub à
			<strong class="text-sub">{{ alert.event.displayName }}</strong> !
		</p>
		<p v-else>
			Merci pour l'abonnement <strong class="text-sub">{{ alert.event.displayName }}</strong> !
		</p>
		<q v-if="alert.event.message && !alert.event.gifted" class="font-bold">
			{{ alert.event.message }}
		</q>
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlaySubscriberEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/subscription.mp3');

	const SubscriptionAlert = defineComponent({
		name: 'SubscriptionAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlaySubscriberEvent>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default SubscriptionAlert;
</script>
