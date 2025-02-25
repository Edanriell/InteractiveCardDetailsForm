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
