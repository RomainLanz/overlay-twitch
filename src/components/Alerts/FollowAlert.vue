<template>
	<Alert>
		Merci <strong class="font-bold text-follow">{{ alert.name }}</strong> pour le follow !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, PropType } from 'vue';
	import { OverlayFollowAlert } from '../../types/OverlayAlert';

	const FollowAlert = defineComponent({
		name: 'FollowAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayFollowAlert>,
				required: true,
			},
		},

		setup({ alert }) {},
	});

	export default FollowAlert;
</script>
