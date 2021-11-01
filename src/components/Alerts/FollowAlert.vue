<template>
	<Alert>
		Merci <strong class="font-bold text-follow">{{ alert.displayName }}</strong> pour le follow !
	</Alert>
</template>

<script name="FollowAlert" lang="ts" setup>
	import Alert from './Alert.vue';
	import type { PropType } from 'vue';
	import type { OverlayFollowerEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/spooky-follow.mp3');

	defineProps({
		alert: {
			type: Object as PropType<OverlayFollowerEvent>,
			required: true,
		},
	});

	onMounted(() => {
		sound.play();
	});
</script>
