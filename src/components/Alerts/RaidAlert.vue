<template>
	<Alert>
		<strong class="text-raid">{{ alert.event.displayName }}</strong> nous raid avec ses
		<strong class="text-raid">{{ alert.event.amount }} raiders</strong> !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayRaidEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/host.mp3');

	const RaidAlert = defineComponent({
		name: 'RaidAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayRaidEvent>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default RaidAlert;
</script>
