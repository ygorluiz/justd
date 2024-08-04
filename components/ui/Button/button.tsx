"use client";

import { motion } from "framer-motion";
import { Button as AriaButton } from "react-aria-components";

import { type HTMLStyledProps, styled } from "styled-system/jsx";
import { button } from "styled-system/recipes";

export const Button = styled(AriaButton, button);
export const AnimatedButton = motion(Button);
export type ButtonProps = HTMLStyledProps<typeof Button>;