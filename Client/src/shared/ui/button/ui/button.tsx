import { type FC, type ReactNode } from "react";

import { Button as StyledButton } from "./styles";

type ButtonProps = {
	children: ReactNode;
	type?: "submit" | "button" | "reset";
};

export const Button: FC<ButtonProps> = ({ children, type = "button" }) => (
	<StyledButton
		initial={{
			backgroundImage: "linear-gradient(177.23deg, #21092f 6.47%, #21092f 55.14%)"
		}}
		whileHover={{
			scale: 1.05,
			backgroundImage: "linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
		}}
		whileTap={{ scale: 0.95 }}
		type={type}
	>
		{children}
	</StyledButton>
);
