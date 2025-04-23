import { type ComponentPropsWithoutRef, type FC, type ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import { Button } from "@shared/ui/button/ui";

import { ButtonContent } from "./styles";

type ButtonState = "idle" | "loading" | "success" | "error";

type SmoothButtonProps = {
	idle: ReactNode;
	loading: ReactNode;
	success: ReactNode;
	error: ReactNode;
	state: ButtonState;
} & ComponentPropsWithoutRef<"button">;

export const SmoothButton: FC<SmoothButtonProps> = ({
	idle,
	loading,
	success,
	error,
	state,
	...rest
}) => {
	const [smoothButtonState, setSmoothButtonState] = useState<ButtonState>("idle");

	const smoothButtonContent = {
		idle,
		loading,
		success,
		error
	};

	useEffect(() => {
		switch (state) {
			case "loading":
				setSmoothButtonState("loading");
				break;
			case "success":
				setSmoothButtonState("success");
				break;
			case "error":
				setSmoothButtonState("error");
				break;
			default:
				setSmoothButtonState("idle");
		}
	}, [state]);

	return (
		<Button type="submit" {...rest}>
			<AnimatePresence mode="popLayout" initial={false}>
				<ButtonContent
					transition={{ type: "spring", duration: 0.3, bounce: 0 }}
					initial={{ opacity: 0, y: -25 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 25 }}
					key={smoothButtonState}
				>
					{smoothButtonContent[smoothButtonState]}
				</ButtonContent>
			</AnimatePresence>
		</Button>
	);
};
