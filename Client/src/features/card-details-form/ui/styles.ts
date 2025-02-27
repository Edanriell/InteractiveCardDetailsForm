import styled from "styled-components";

export const Form = styled.form`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 327rem;
	width: 100%;
`;

export const Fieldset = styled.fieldset`
	border: none;
	margin: unset;
	padding: unset;
	display: flex;
	flex-direction: column;
	row-gap: 20rem;
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

export const FormFieldGroup = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 11rem;
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

export const FormInput = styled.input`
	border: 1rem solid var(--light-grey);
	border-radius: 8rem;
	width: 100%;
	max-height: 45rem;
	padding: 11rem 16rem;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18rem;
	color: var(--deep-violet);

	&::placeholder {
		opacity: 0.25;
	}
`;

export const Button = styled.button`
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
	margin-top: 8rem;
`;
