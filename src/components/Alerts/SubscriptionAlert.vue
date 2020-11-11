<template>
	<Alert>
		<p>
			Merci pour l'abonnement <strong class="text-sub">{{ alert.name }}</strong> !
		</p>
		<q v-if="alert.message" class="font-bold">
			{{ alert.message }}
		</q>
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlaySubscriptionAlert } from '../../types/OverlayAlert';

	const sound = new Audio('/sounds/subscription.mp3');

	const SubscriptionAlert = defineComponent({
		name: 'SubscriptionAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlaySubscriptionAlert>,
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
