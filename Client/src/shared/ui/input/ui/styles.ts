import styled from "styled-components";
import { motion } from "motion/react";

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 9rem;
`;

export const InputLabel = styled.label`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 12rem;
	letter-spacing: 0.17em;
	text-transform: uppercase;
	color: var(--deep-violet);
`;

export const InputSrOnlyLabel = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`;

export const StyledInput = styled(motion.input)`
	border: 1rem solid var(--light-grey);
	border-radius: 8rem;
	width: 100%;
	max-height: 45rem;
	padding: 11rem 16rem;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18rem;
	color: var(--deep-violet);
	background: var(--white);
	outline: none;
	background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
	background-origin: border-box;
	background-clip: padding-box, border-box;

	&::placeholder {
		opacity: 0.25;
	}
`;

export const InputErrorMessage = styled(motion.p)`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 12rem;
	color: var(--red);
	margin-top: -1rem;
`;
