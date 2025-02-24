import styled from "styled-components";

export const LayoutRoot = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	background-color: var(--white);
`;

export const LayoutBackgroundSmall = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	zindex: 1;
	display: block;

	@media (width >= 1440px) {
		display: none;
	}
`;
