/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cormorant', 'serif'], // Set Cormorant as the default serif font
			},
			fontSize: {
				base: '2.5rem',
				'h1': '2.25rem', // Equivalent to 36px
				'h2': '1.875rem', // Equivalent to 30px
				'h3': '1.5rem', // Equivalent to 24px
				'h4': '1.25rem', // Equivalent to 20px
				'h5': '1.125rem', // Equivalent to 18px
				'h6': '1rem', // Equivalent to 16px
			},
		},
	},
	plugins: [],
}
