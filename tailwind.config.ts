import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				pampas: "rgba(var(--color-pampas), <alpha-value>)",
				"bridal-heath": "rgba(var(--color-bridal-heath), <alpha-value>)",
				"gun-powder": "rgba(var(--color-gun-powder), <alpha-value>)",
				"steel-gray": "rgba(var(--color-steel-gray), <alpha-value>)",
				viking: "rgba(var(--color-viking), <alpha-value>)",
				"medium-carmine": "rgba(var(--color-medium-carmine), <alpha-value>)",
				chenin: "rgba(var(--color-chenin), <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-roboto)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
