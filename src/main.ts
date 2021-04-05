import './assets/app.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Header from './components/Header.vue';
import AlertList from './components/AlertList.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/alerts', component: AlertList },
		{ path: '/header', component: Header },
	],
});

createApp(App).use(router).mount('#app');
