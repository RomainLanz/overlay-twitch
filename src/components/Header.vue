<template>
	<div class="relative grid h-16 grid-cols-2 px-8 overflow-hidden text-2xl text-white border-b-4 bg-bg border-purple">
		<div class="radient"></div>

		<div>
			<!-- Songs -->
		</div>

		<div class="flex items-center justify-end">
			<span>{{ viewers }} viewers | {{ followers }} followers</span>
		</div>
	</div>
</template>

<script name="Header" lang="ts" setup>
	import { useViewerCount } from '../composables/useViewerCount';
	import { useFollowerCount } from '../composables/useFollowerCount';

	const followers = useFollowerCount();
	const viewers = useViewerCount();
</script>

<style>
	.radient {
		position: absolute;
		top: -130px;
		left: -100px;
		background: linear-gradient(#00ffff, #e500f1);
		height: 250px;
		width: 1500px;
		filter: blur(70px);
	}
</style>
