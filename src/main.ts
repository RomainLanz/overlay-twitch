import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './assets/app.css';
import App from './App.vue';
import Header from './components/Header.vue';
import AlertList from './components/AlertList.vue';
import CameraBorder from './components/CameraBorder.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/header', component: Header },
		{ path: '/alerts', component: AlertList },
		{ path: '/cam', component: CameraBorder },
	],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
