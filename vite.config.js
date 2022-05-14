import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: 'https://YoimelDev.github.io/kimche-challenge/',
	build: {
		outDir: 'docs'
	}
})
