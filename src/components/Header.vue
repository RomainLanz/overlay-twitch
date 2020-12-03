<template>
	<div class="grid h-16 grid-cols-3 px-8 text-2xl text-white border-b-4 bg-bg border-follow">
		<div>
			<!-- Songs -->
		</div>

		<div class="flex items-center justify-center">
			<div class="w-full h-8 overflow-hidden bg-white rounded-full">
				<div
					class="flex items-center justify-center h-full font-medium bg-follow"
					:style="{
						width: `${(subscribers / subGoal) * 100}%`,
					}"
				>
					<span>{{ subscribers }} subs / {{ subGoal }}</span>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-end">
			<span>{{ viewers }} viewers | {{ followers }} followers</span>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useViewerCount } from '../composables/useViewerCount';
	import { useFollowerCount } from '../composables/useFollowerCount';
	import { useSubscriberCount } from '../composables/useSubscriberCount';

	const Header = defineComponent({
		name: 'Header',

		setup() {
			const followers = useFollowerCount();
			const viewers = useViewerCount();
			const subscribers = useSubscriberCount();
			const subGoal = 50;

			return { subGoal, subscribers, followers, viewers };
		},
	});

	export default Header;
</script>
