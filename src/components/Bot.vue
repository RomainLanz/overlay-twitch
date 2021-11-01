<template>
	<div class="absolute bottom-0 left-0 right-0 text-2xl" style="margin-bottom: 400px">
		<TransitionGroup
			class="flex flex-col items-end justify-end overflow-hidden"
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="transform translate-y-24 opacity-0"
			enter-to-class="transform translate-y-0 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="transform translate-y-0 opacity-100"
			leave-to-class="transform translate-y-24 opacity-0"
			move-class="transition duration-200 transform"
			tag="ul"
		>
			<li v-for="(message, index) in messages" :key="index" style="width: 700px">
				<div class="flex px-4 py-2 bg-white opacity-90">
					<!-- <div class="flex items-center flex-shrink-0 space-x-4"> -->
					<!-- <img class="w-14 h-14" :src="message.logo" /> -->
					<span class="mr-4 font-bold whitespace-nowrap" :style="`color: ${message.color}`">
						$ {{ message.username }}:
					</span>
					<span class="text-gray-900" v-html="message.message"></span>
					<!-- </div> -->
					<!-- <div class="flex-1 min-w-0 p-2"> -->

					<!-- </div> -->
				</div>
			</li>
		</TransitionGroup>
	</div>
</template>

<script name="Bot" lang="ts" setup>
	import { escape, truncate } from 'lodash';
	import { onMounted, ref } from 'vue';
	import io from 'socket.io-client';

	const messages = ref<Record<string, string>[]>([]);

	function sanitize(message: string) {
		return truncate(escape(message), { length: 240 }).normalize('NFKD');
	}

	onMounted(() => {
		const socket = io('localhost:7331', {
			transports: ['websocket'],
			upgrade: false,
			rejectUnauthorized: false,
		});

		socket.on('message:sent', (payload: any) => {
			const { logo, color, username, message } = JSON.parse(payload);

			messages.value.push({
				logo,
				color,
				username: sanitize(username),
				message: sanitize(message),
			});
		});
	});
</script>
