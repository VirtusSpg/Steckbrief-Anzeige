module.exports = {
	mode: 'jit',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
	darkMode: 'class',
	theme: {
		extend: {
	
		},

		keyframes: {
			'scroll': {
				'0%': { transform: 'left: 100%' },
				'100%': { transform: 'left: -100%' }
			}
		},

		animation: {
			'scroll': 'scroll 3s linear infinite'
		}
	}
};