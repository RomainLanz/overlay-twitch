import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import PkgConfig from 'vite-plugin-package-config';
import OptimizationPersist from 'vite-plugin-optimize-persist';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 1337,
	},
	plugins: [
		Vue(),
		PkgConfig(),
		OptimizationPersist(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-imports.d.ts',
		}),
	],
});
