<template>
	<div class="absolute top-0 left-0 right-0 mt-56 mr-32 text-2xl">
		<TransitionGroup
			class="space-y-4"
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="transform translate-x-24 opacity-0"
			enter-to-class="transform translate-x-0 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="transform translate-x-0 opacity-100"
			leave-to-class="transform translate-x-24 opacity-0"
			move-class="transition duration-200 transform"
			tag="div"
		>
			<div class="flex justify-end" v-for="alert in alerts" :key="alert._id">
				<component :is="getComponent(alert)" :alert="alert"></component>
			</div>
		</TransitionGroup>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useStreamlabsAlert } from '../composables/useStreamlabsAlerts';
	import { OverlayAlert } from '../types/OverlayAlert';
	import { BitsAlert, FollowAlert, HostAlert, RaidAlert, ResubAlert, SubscriptionAlert } from './Alerts';

	const componentsMap: Record<OverlayAlert['type'], any> = {
		follow: FollowAlert,
		resub: ResubAlert,
		host: HostAlert,
		donation: FollowAlert,
		bits: BitsAlert,
		raid: RaidAlert,
		subscription: SubscriptionAlert,
	};

	const AlertList = defineComponent({
		name: 'AlertList',

		setup() {
			const alerts = useStreamlabsAlert(6000);

			function getComponent(alert: OverlayAlert) {
				return componentsMap[alert.type] as any;
			}

			return { alerts, getComponent };
		},
	});

	export default AlertList;
</script>
