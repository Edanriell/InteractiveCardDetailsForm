import styled from "styled-components";
import { motion } from "motion/react";

export const Form = styled.form`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 327rem;
	width: 100%;

	@media (width >= 1440px) {
		max-width: 381rem;
		top: 50%;
		left: 57.8%;
		transform: translate(0, -50%);
	}
`;

export const Fieldset = styled.fieldset`
	border: none;
	margin: unset;
	padding: unset;
	display: flex;
	flex-direction: column;
	row-gap: 20rem;

	@media (width >= 1440px) {
		row-gap: 26rem;
	}
`;

export const Legend = styled.legend`
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

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 9rem;
`;

type FormFieldGroupProps = {
	gap?: string;
	width?: string;
};

export const FormFieldGroup = styled.div<FormFieldGroupProps>`
	display: flex;
	flex-direction: row;
	column-gap: ${({ gap }) => gap || "11rem"};
	width: ${({ width }) => width || "152rem"};

	@media (min-width: 1440px) {
		width: ${({ width }) => width || "170rem"};
		column-gap: ${({ gap }) => gap || "20rem"};
	}
`;

export const FormInputLabel = styled.label`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 12rem;
	letter-spacing: 0.17em;
	text-transform: uppercase;
	color: var(--deep-violet);
`;

export const FormInputSrOnlyLabel = styled.label`
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

export const FormInput = styled(motion.input)`
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

type ButtonProps = {
	marginTop?: string;
};

export const Button = styled.button<ButtonProps>`
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

export const ErrorMessage = styled(motion.p)`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 12rem;
	color: var(--red);
	margin-top: -1rem;
`;
