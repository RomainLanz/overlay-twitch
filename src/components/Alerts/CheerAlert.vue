<template>
	<Alert>
		<p>
			Merci à <strong class="text-sub">{{ alert.displayName }}</strong> pour la donation de
			<strong class="text-sub">{{ alert.amount }} cheers</strong> !
		</p>
		<q v-if="alert.message" class="font-bold">
			{{ alert.message }}
		</q>
	</Alert>
</template>

<script name="CheerAlert" lang="ts" setup>
	import { defineProps, onMounted } from 'vue';
	import Alert from './Alert.vue';

	import type { PropType } from 'vue';
	import type { OverlayCheerEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/spooky-donation.mp3');

	defineProps({
		alert: {
			type: Object as PropType<OverlayCheerEvent>,
			required: true,
		},
	});

	onMounted(() => {
		sound.play();
	});
</script>
