import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
`;

export const CardFrontFace = styled.div`
	position: relative;
	display: block;
	border-radius: 6rem;
	width: 286rem;
	height: 157rem;
	background: linear-gradient(169deg, #fff 0%, #d2d3d9 100%);
`;

export const CardBackFace = styled.div`
	position: relative;
	display: block;
	border-radius: 6rem;
	width: 285rem;
	height: 156rem;
	background: linear-gradient(164deg, #6348fe 0%, #610595 100%);
	overflow: hidden;
`;

export const MagneticStripe = styled.div`
	position: absolute;
	top: 15rem;
	left: 0;
	width: 100%;
	height: 34rem;
	background: #2f2f2f;
`;

export const SignaturePanel = styled.div`
	position: absolute;
	top: 65rem;
	left: 50%;
	border-radius: 4rem;
	width: 230rem;
	height: 29rem;
	background: #adb5be;
	transform: translateX(-50%);
`;

export const CvvPanel = styled.div`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 9rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	text-align: right;
	color: var(--white);
	position: absolute;
	right: 11rem;
	top: 50%;
	transform: translateY(-50%);
`;
