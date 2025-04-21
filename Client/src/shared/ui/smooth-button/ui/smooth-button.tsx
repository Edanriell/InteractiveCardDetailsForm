import { type FC, type ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import { Button } from "@shared/ui/button/ui";
import { ButtonContent } from "@shared/ui/smooth-button/ui/styles.ts";

type SmoothButtonProps = {
	idle: ReactNode;
	loading: ReactNode;
	success: ReactNode;
	error: ReactNode;
	state: any;
};

type ButtonState = "idle" | "loading" | "success" | "error";

export const SmoothButton: FC<SmoothButtonProps> = ({ idle, loading, success, error, state }) => {
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
		<Button type="submit">
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
