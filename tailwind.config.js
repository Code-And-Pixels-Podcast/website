module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"white": "#FFFFFF",
			"gray": {
				100: "#AEAEAE",
				200: "#A7B5CB",
				300: "#30353C",
				400: "#202327",
				500: "#191B1E",
				600: "#2B323F",
				700: "#797979"
			},
			"blue": {
				500: "#42A4FF",
				600: "#1F7DD4",
			},
		},
		extend: {
			fontFamily: {
				"sans": ["montserratmedium", "sans"],
				"sans-bold": ["montserratbold", "sans"] 
			},
			fontSize: {
				"5xl": "2.625rem"
			}
		},
	},
	plugins: [],
}
