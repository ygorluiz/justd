import { AnimatedButton, Button } from "@/components/ui/Button/button";
import { center } from "styled-system/patterns";
export default function Page() {
	return (
		<div className={center({ h: "100%" })}>
			<AnimatedButton
				variant="solid"
				whileHover={{
					scale: 1.2,
					transition: { duration: 1 },
				}}
				whileTap={{ scale: 0.9 }}
			>
				Button
			</AnimatedButton>
		</div>
	);
}