import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite'
import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [houdini(), sveltekit()]
});
