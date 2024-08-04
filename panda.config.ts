import { conditions } from "@/themes/conditions";
import { recipes } from "@/themes/recipes";
import { defineConfig } from "@pandacss/dev";
export default defineConfig({
	// Whether to use css reset
	preflight: true,
	// conditions
	conditions,
	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],

	layers: {
		reset: "ui_reset",
		base: "ui_base",
		tokens: "ui_tokens",
		recipes: "ui_recipes",
		utilities: "ui_utilities",
	},
	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			recipes,
		},
	},
	jsxFramework: "react",

	// The output directory for your css system
	outdir: "styled-system",
});
