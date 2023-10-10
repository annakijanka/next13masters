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
				java: "rgba(var(--color-java), <alpha-value>)",
				"brick-red": "rgba(var(--color-brick-red), <alpha-value>)",
				chenin: "rgba(var(--color-chenin), <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-roboto)"],
			},
			keyframes: {
				slide: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				slide: "slide .3s ease-in-out forwards",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
