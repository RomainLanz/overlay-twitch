<template>
	<Alert>
		<p>
			Merci à <strong class="text-sub">{{ alert.name }}</strong> pour la donation de
			<strong class="text-sub">{{ alert.amount }} bits</strong> !
		</p>
		<q v-if="alert.message" class="font-bold">
			{{ alert.message }}
		</q>
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, onMounted, PropType } from 'vue';
	import { OverlayBitsAlert } from '../../types/OverlayAlert';

	const sound = new Audio('/sounds/donation.mp3');

	const BitsAlert = defineComponent({
		name: 'BitsAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayBitsAlert>,
				required: true,
			},
		},

		setup({ alert }) {
			onMounted(() => {
				sound.play();
			});
		},
	});

	export default BitsAlert;
</script>
