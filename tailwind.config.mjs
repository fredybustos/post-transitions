/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'post': 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
