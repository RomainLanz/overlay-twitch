<template>
	<div class="px-8 py-4 text-gray-900 bg-white border-gray-300 rounded-lg shadow-2xl">
		<slot />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';

	const Alert = defineComponent({
		name: 'Alert',
	});

	export default Alert;
</script>

<style scoped>
	strong {
		@apply font-bold;
	}
</style>
