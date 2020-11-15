<template>
	<Alert>
		<strong class="text-host">{{ alert.event.displayName }}</strong> nous host avec ses
		<strong class="text-host">{{ alert.event.amount }} viewers</strong> !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayHostEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/host.mp3');

	const HostAlert = defineComponent({
		name: 'HostAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayHostEvent>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default HostAlert;
</script>
