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
			<div class="flex justify-end" v-for="alert in alerts" :key="alert.uuid">
				<component :is="getComponent(alert)" :alert="alert"></component>
			</div>
		</TransitionGroup>
	</div>
</template>

<script name="AlertList" lang="ts" setup>
	import { CheerAlert, FollowAlert, HostAlert, RaidAlert, SubscriptionAlert } from './Alerts';
	import { useStreamElementsAlerts } from '../composables/useStreamElementsAlerts';
	import type { OverlayEvents } from '../types/OverlayEvent';

	const componentsMap: Record<OverlayEvents['type'], any> = {
		follow: FollowAlert,
		subscriber: SubscriptionAlert,
		host: HostAlert,
		raid: RaidAlert,
		cheer: CheerAlert,
	};

	const alerts = useStreamElementsAlerts();

	function getComponent(alert: OverlayEvents) {
		return componentsMap[alert.type] as any;
	}
</script>
