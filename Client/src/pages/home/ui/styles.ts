import styled from "styled-components";

export const Page = styled.main`
	position: relative;
	z-index: 2;
	min-height: inherit;
`;

export const PageSection = styled.section`
	position: relative;
	min-height: inherit;
`;

export const PageTitle = styled.h1`
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

export const CardBackWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;

	@media (width >= 1440px) {
		bottom: 0;
		right: 0;
		top: unset;
	}
`;

export const CardFrontWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2;

	@media (width >= 1440px) {
		top: 0;
		left: 0;
		bottom: unset;
	}
`;
