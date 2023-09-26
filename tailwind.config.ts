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
				"port-gore": "rgba(var(--color-port-gore), <alpha-value>)",
				"dodger-blue": "rgba(var(--color-dodger-blue), <alpha-value>)",
				heliotrope: "rgba(var(--color-heliotrope), <alpha-value>)",
				"purple-heart": "rgba(var(--color-purple-heart), <alpha-value>)",
				daintree: "rgba(var(--color-daintree), <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-roboto)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
