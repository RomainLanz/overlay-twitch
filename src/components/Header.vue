<template>
	<div class="grid h-16 grid-cols-3 px-8 text-2xl text-white border-b-4 bg-bg border-follow">
		<div>
			<!-- Songs -->
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

	const Header = defineComponent({
		name: 'Header',

		setup() {
			const followers = useFollowerCount();
			const viewers = useViewerCount();

			return { followers, viewers };
		},
	});

	export default Header;
</script>
