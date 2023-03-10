module.exports = {
	mode: 'jit',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'lightblue': 'rgb(27,188,237)',
				'darkblue': 'rgb(22,61,136)',
				'virtusred': 'rgb(230,5,37)',
			}
		},

		keyframes: {
			'scroll': {
				'0%': { transform: 'left: 100%' },
				'100%': { transform: 'left: -100%' }
			},
			'fade': {
				'0%': { opacity: 0 },
				'7%': { opacity: 1 },
				'93%': { opacity: 1 },
				'100%': { opacity: 0 }
			}
		},

		animation: {
			'scroll': 'scroll 3s linear infinite',
			'fade': 'fade 10s ease infinite'
		}
	}
};