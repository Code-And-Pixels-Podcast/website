module.exports = {
	content: [
		"src/pages/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: {
				100: "#AEAEAE",
				200: "#A7B5CB",
				300: "#30353C",
				400: "#202327",
				500: "#191B1E",
				600: "#2B323F",
				700: "#797979",
			},
			blue: {
				400: "#93C5FD",
				500: "#42A4FF",
				600: "#1F7DD4",
			},
			green: {
				500: "#22c55e",
				800: "#166534",
				900: "#14532d",
			},
			red: {
				800: "#991b1b",
				900: "#7f1d1d",
			},
		},
		extend: {
			fontFamily: {
				sans: ["montserrat", "sans"],
				"sans-bold": ["montserratbold", "sans"],
			},
			fontSize: {
				"5xl": "2.625rem",
			},
		},
	},
	plugins: [],
};
