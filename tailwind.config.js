module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans'],
				base: ['MonoLisa'],
			},
			colors: {
				follow: '#fb6745',
				host: '#e8368f',
				raid: '#ef4e4e',
				sub: '#5a45ff',
				bg: '#212935',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
