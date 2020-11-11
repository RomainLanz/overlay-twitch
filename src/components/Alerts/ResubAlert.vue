<template>
	<Alert>
		<p>
			Merci à <strong class="text-sub">{{ alert.name }}</strong> pour son
			<strong class="text-sub">{{ alert.months }}ème mois</strong> d'abonnement !
		</p>
		<q v-if="alert.message" class="font-bold">
			{{ alert.message }}
		</q>
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayResubAlert } from '../../types/OverlayAlert';

	const sound = new Audio('/sounds/subscription.mp3');

	const ResubAlert = defineComponent({
		name: 'ResubAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayResubAlert>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default ResubAlert;
</script>
