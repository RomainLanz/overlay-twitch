<template>
	<div class="relative w-screen h-screen font-base">
		<RouterView />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	const App = defineComponent({
		name: 'App',
	});

	export default App;
</script>
