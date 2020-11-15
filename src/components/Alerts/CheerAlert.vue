<template>
	<Alert>
		<p>
			Merci à <strong class="text-sub">{{ alert.event.displayName }}</strong> pour la donation de
			<strong class="text-sub">{{ alert.event.amount }} cheers</strong> !
		</p>
		<q v-if="alert.event.message" class="font-bold">
			{{ alert.event.message }}
		</q>
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayCheerEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/donation.mp3');

	const CheerAlert = defineComponent({
		name: 'CheerAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayCheerEvent>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default CheerAlert;
</script>
