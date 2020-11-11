<template>
	<Alert>
		<strong class="text-raid">{{ alert.name }}</strong> nous raid avec ses
		<strong class="text-raid">{{ alert.raiders }} raiders</strong> !
	</Alert>
</template>

<script lang="ts">
	import Alert from './Alert.vue';
	import { defineComponent, PropType } from 'vue';
	import { OverlayRaidAlert } from '../../types/OverlayAlert';

	const RaidAlert = defineComponent({
		name: 'RaidAlert',

		components: { Alert },

		props: {
			alert: {
				type: Object as PropType<OverlayRaidAlert>,
				required: true,
			},
		},

		setup({ alert }) {},
	});

	export default RaidAlert;
</script>
