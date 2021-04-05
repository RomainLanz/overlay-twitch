<template>
	<div class="flex-grow-0 max-w-4xl px-8 py-4 text-gray-900 bg-white border-gray-300 rounded-lg shadow-2xl">
		<slot />
	</div>
</template>

<script name="Alert" lang="ts" setup></script>

<style scoped>
	strong {
		@apply font-bold;
	}
</style>
