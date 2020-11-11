<template>
	<div class="flex items-center justify-end h-16 px-8 text-2xl bg-white">
		{{ viewers }} viewers | {{ followers }} followers
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useFollowerCount } from '../composables/useFollowerCount';
	import { useViewerCount } from '../composables/useViewerCount';

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
