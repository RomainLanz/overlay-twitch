<template>
	<Alert>
		<strong class="text-host">{{ alert.displayName }}</strong> nous host avec ses
		<strong class="text-host">{{ alert.amount }} viewers</strong> !
	</Alert>
</template>

<script name="HostAlert" lang="ts" setup>
	import Alert from './Alert.vue';
	import type { PropType } from 'vue';
	import type { OverlayHostEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/host.mp3');

	defineProps({
		alert: {
			type: Object as PropType<OverlayHostEvent>,
			required: true,
		},
	});

	onMounted(() => {
		sound.play();
	});
</script>
