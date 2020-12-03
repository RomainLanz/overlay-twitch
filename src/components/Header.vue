<template>
	<div class="flex items-center justify-between h-16 px-8 text-2xl text-white border-b-4 bg-bg border-follow">
		<div>
			<!-- Songs -->
		</div>

		<div class="flex">
			<div class="h-8 ml-4 overflow-hidden bg-white rounded-full" style="width: 500px">
				<div
					class="flex items-center justify-center h-full font-medium bg-follow"
					:style="{
						width: `${(subscribers / subGoal) * 100}%`,
					}"
				>
					<span>{{ subscribers }} / {{ subGoal }}</span>
				</div>
			</div>
		</div>
		<span>{{ viewers }} viewers | {{ followers }} followers</span>
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
