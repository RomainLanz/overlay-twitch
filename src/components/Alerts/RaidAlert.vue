<template>
	<Alert>
		<strong class="text-raid">{{ alert.displayName }}</strong> nous raid avec ses
		<strong class="text-raid">{{ alert.amount }} raiders</strong> !
	</Alert>
</template>

<script name="RaidAlert" lang="ts" setup>
	import Alert from './Alert.vue';
	import { defineProps, onMounted } from 'vue';
	import type { PropType } from 'vue';
	import type { OverlayRaidEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/host.mp3');

	defineProps({
		alert: {
			type: Object as PropType<OverlayRaidEvent>,
			required: true,
		},
	});

	onMounted(() => {
		sound.play();
	});
</script>
