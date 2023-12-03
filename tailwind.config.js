/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'red-light': '#b01b2e',
			'red-dark': '#702D36',
			'green-light': '#1AB039',
			'green-dark': '#2C5B36',
			brown: '#332124',
			white: '#DECACD'
		},
		extend: {
			button: {
				primary: {
					color: '#DECACD',
					backgroundColor: '#332124',
					'&:hover': {
						backgroundColor: '#702D36'
					}
				}
			}
		}
	},
	plugins: []
};
