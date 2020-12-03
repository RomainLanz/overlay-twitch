<template>
	<a :href="url">Login with Twitch</a>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { getUrlParam } from '../utils/getKey';

	// @ts-expect-error
	const clientId = getUrlParam('clientId', String(import.meta.env.VITE_TWITCH_CLIENT_ID_APP));

	// @ts-expect-error
	const redirectUrl = getUrlParam('redirectUrl', String(import.meta.env.VITE_TWITCH_REDIRECT_URL));

	const Login = defineComponent({
		setup() {
			const url = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=channel:read:subscriptions`;

			return { url };
		},
	});

	export default Login;
</script>
