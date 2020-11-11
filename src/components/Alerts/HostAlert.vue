<template>
	<Alert>
		<strong class="text-host">{{ alert.name }}</strong> nous host avec ses
		<strong class="text-host">{{ alert.viewers }} viewers</strong> !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, PropType } from 'vue';
	import { OverlayHostAlert } from '../../types/OverlayAlert';

	const HostAlert = defineComponent({
		name: 'HostAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayHostAlert>,
				required: true,
			},
		},

		setup({ alert }) {},
	});

	export default HostAlert;
</script>
