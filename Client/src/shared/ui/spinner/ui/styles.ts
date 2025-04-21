import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

export const CircleGroup = styled.g`
	transform-origin: center;
	animation: ${rotate} 1.5s linear infinite;
`;
