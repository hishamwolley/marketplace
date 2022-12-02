const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	important: true,
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			screens: {
				"3xl": "1600px",
			},
			fontFamily: {
				Montserrat: ["Montserrat", "cursive"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ noncompatible: true })],
};
