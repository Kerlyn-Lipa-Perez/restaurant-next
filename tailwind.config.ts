import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				blueGray: {
					50: "#F8FAFC",
					100: "#F1F5F9",
					200: "#E2E8F0",
					300: "#CBD5E1",
					400: "#94A3B8",
					500: "#64748B",
					600: "#475569",
					700: "#334155",
					800: "#1E293B",
					900: "#0F172A",
				},
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
};
export default config;