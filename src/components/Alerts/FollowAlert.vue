<template>
	<Alert>
		Merci <strong class="font-bold text-follow">{{ alert.event.displayName }}</strong> pour le follow !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayFollowerEvent } from '../../types/OverlayEvent';

	const sound = new Audio('/sounds/follow.mp3');

	const FollowAlert = defineComponent({
		name: 'FollowAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayFollowerEvent>,
				required: true,
			},
		},

		setup({ alert }) {
			alert.event.displayName;
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default FollowAlert;
</script>
