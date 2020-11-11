<template>
	<Alert>
		Merci <strong class="font-bold text-follow">{{ alert.name }}</strong> pour le follow !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayFollowAlert } from '../../types/OverlayAlert';

	const sound = new Audio('/sounds/follow.mp3');

	const FollowAlert = defineComponent({
		name: 'FollowAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayFollowAlert>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default FollowAlert;
</script>
