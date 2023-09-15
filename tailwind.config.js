/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'tablet': '640px',	  
				'laptop': '1024px',	  
				'desktop': '1280px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			fontFamily: {
				body: ['inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				background: 'rgb(242 240 246)',
				text: 'rgb(55 55 55)'
			}
		}
	},
	plugins: []
};
