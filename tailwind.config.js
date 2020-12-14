module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: ['./src/**/*.vue'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans'],
				base: ['Cascadia Code'],
			},
			borderWidth: {
				cam: '48px',
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
	variants: {},
	plugins: [],
};
