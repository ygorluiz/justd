"use client";

import { motion } from "framer-motion";
import type * as React from "react";
import { forwardRef } from "react";
import { ButtonContext, useButton, useContextProps } from "react-aria";
import { css } from "styled-system/css";
import { type RecipeVariantProps, cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

const buttonStyles = cva({
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		transition: "all 0.2s",
	},
	variants: {
		visual: {
			solid: { bg: "red.200", color: "white" },
			outline: { borderWidth: "1px", borderColor: "red.200", color: "red.200" },
		},
		size: {
			sm: { padding: "4", fontSize: "12px" },
			lg: { padding: "8", fontSize: "24px" },
		},
	},
	defaultVariants: {
		visual: "solid",
		size: "sm",
	},
});

type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonVariants {}

const AnimatedButton = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, forwardedRef) => {
		const [localProps, ref] = useContextProps(
			props,
			forwardedRef,
			ButtonContext,
		);
		const { buttonProps, isPressed } = useButton(localProps, ref);

		const { visual, size, className, ...otherProps } = localProps;

		return (
			<motion.button
				{...buttonProps}
				{...otherProps}
				ref={ref}
				className={css(buttonStyles({ visual, size }), className)}
				animate={{
					scale: isPressed ? 0.9 : 1,
				}}
			>
				{localProps.children}
			</motion.button>
		);
	},
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };