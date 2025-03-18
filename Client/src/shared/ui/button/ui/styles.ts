import styled from "styled-components";
import { motion } from "motion/react";

type ButtonProps = {
	marginTop?: string;
};

export const Button = styled(motion.button)<ButtonProps>`
	border-radius: 8rem;
	width: 100%;
	height: 53rem;
	background: var(--deep-violet);
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18rem;
	color: var(--white);
	text-align: center;
	cursor: pointer;
	margin-top: ${({ marginTop }) => marginTop || "8rem"};

	@media (width >= 1440px) {
		margin-top: ${({ marginTop }) => marginTop || "14rem"};
	}
`;
