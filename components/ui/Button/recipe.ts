import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
	className: "button",
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		whiteSpace: "nowrap",
		rounded: "md",
		fontSize: "md",
		fontWeight: "medium",
		transition: "colors",
		bg: "green",
		py: 2,
		px: 3,
		gap: 1,
		colorPalette: "slate",
		outline: { base: "none", _ariaFocusVisible: "auto" },
		_ariaPressed: { shadow: "inner" },
		_ariaDisabled: { opacity: 0.5 },
	},
	variants: {
		variant: {
			solid: {
				bg: {
					base: "red",
					_ariaHover: "blue",
				},
				color: "white",
			},
			outline: {
				border: "1px solid",
				borderColor: "colorPalette.bg",
				bg: {
					base: "transparent",
					_ariaHover: "colorPalette.fg/80",
				},
				color: "colorPalette.bg",
			},
			subtle: {
				bg: {
					base: "colorPalette.fg",
					_ariaHover: "colorPalette.fg.1",
				},
				color: "colorPalette.bg",
			},
			link: {},
		},
	},
	defaultVariants: { variant: "solid" },
});