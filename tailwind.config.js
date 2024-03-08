/** @type {import('tailwindcss').Config} **/

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#a9a9a9',
				gray: '#181818',
			
			},
			screens: {
				mobile: [{ min: '350px', max: '576px' }],
				tablet: [{ min: '576px', max: '768px' }],
				laptop: [{ min: '768px', max: '992px' }],
				pc: [{ min: '992px', max: '1200px' }],
				desktop: [{ min: '1200px', max: '1500px' }],
			},
			fontFamily: {
				'sans': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
