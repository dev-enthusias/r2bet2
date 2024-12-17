import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'source-code-pro': ['var(--font-source-code-pro)'],
				mulish: ['var(--font-mulish)'],
				nunito: ['var(--font-nunito)'],
				'space-grotesk': ['var(--font-nunito)'],
				inter: ['var(--font-inter)'],
				lato: ['var(--font-lato)']
			},
			colors: {
				primary: '#1E7F48',
				'grey-2': '#4F4F4F',
				'grey-3': '#828282'
			}
		}
	},

	plugins: []
} satisfies Config;
