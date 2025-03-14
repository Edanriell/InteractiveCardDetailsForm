import { type FC, type ReactNode } from "react";

import { Button as StyledButton } from "./styles";

type ButtonProps = {
	children: ReactNode;
	type?: "submit" | "button" | "reset";
};

export const Button: FC<ButtonProps> = ({ children, type = "button" }) => (
	<StyledButton type={type}>{children}</StyledButton>
);
