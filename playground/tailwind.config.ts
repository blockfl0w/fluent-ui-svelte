import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				accent: 'var(--fill-accent)',
				bgControl: 'var(--fill-bg-control)',
				border: 'var(border)'
			}
		}
	},

	plugins: []
} as Config;
