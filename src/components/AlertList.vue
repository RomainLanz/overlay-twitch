<template>
	<div class="absolute top-0 right-0 mt-56 mr-32 space-y-4 text-2xl">
		<div v-for="alert in alerts" :key="alert._id">
			<component :is="getComponent(alert)" :alert="alert"></component>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useStreamlabsAlert } from '../composables/useStreamlabsAlerts';
	import { OverlayAlert } from '../types/OverlayAlert';
	import { FollowAlert, HostAlert, RaidAlert } from './Alerts';

	const componentsMap: Record<OverlayAlert['type'], any> = {
		follow: FollowAlert,
		host: HostAlert,
		donation: FollowAlert,
		bits: FollowAlert,
		raid: RaidAlert,
		subscription: FollowAlert,
	};

	const AlertList = defineComponent({
		name: 'AlertList',

		setup() {
			const alerts = useStreamlabsAlert();

			function getComponent(alert: OverlayAlert) {
				return componentsMap[alert.type] as any;
			}

			return { alerts, getComponent };
		},
	});

	export default AlertList;
</script>
