import styled from "styled-components";

export const CardContainer = styled.div`
	position: absolute;
	width: 342rem;
	height: 250rem;
	left: 50%;
	top: 32rem;
	transform: translateX(-50%);

	@media (width >= 1440px) {
		width: 541rem;
		height: 527rem;
		top: 50%;
		left: 164rem;
		transform: unset;
		transform: translateY(-50%);
	}
`;

export const CardFrontFace = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: block;
	border-radius: 6rem;
	width: 285rem;
	height: 156rem;
	background: linear-gradient(164deg, #6348fe 0%, #610595 100%);
	overflow: hidden;

	@media (width >= 1440px) {
		border-radius: 10rem;
		width: 447rem;
		height: 245rem;
		top: 0;
		left: 0;
		bottom: unset;
	}
`;

export const CardFrontFaceSmallBackground = styled.svg`
	display: block;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const CardFrontFaceLargeBackground = styled.svg`
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const Logotype = styled.div`
	position: absolute;
	top: 17rem;
	left: 19rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 10rem;

	@media (width >= 1440px) {
		top: 28rem;
		left: 32rem;
		column-gap: 16rem;
	}
`;

export const Circle = styled.div`
	width: 30rem;
	height: 30rem;
	border-radius: 100%;
	background-color: var(--white);

	@media (width >= 1440px) {
		width: 47rem;
		height: 47rem;
	}
`;

export const HollowCircle = styled.div`
	width: 13rem;
	height: 13rem;
	border-radius: 100%;
	border: solid 1rem var(--white);

	@media (width >= 1440px) {
		width: 21rem;
		height: 21rem;
	}
`;

export const CardNumber = styled.div`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 18rem;
	letter-spacing: 0.12em;
	color: var(--white);
	position: absolute;
	bottom: 48rem;
	left: 19rem;

	> :nth-child(4n) {
		margin-right: 10rem;
	}

	@media (width >= 1440px) {
		font-size: 28rem;
		bottom: 70rem;
		left: 32rem;

		> :nth-child(4n) {
			margin-right: 17rem;
		}
	}
`;

export const CardHolderFullName = styled.div`
	position: absolute;
	bottom: 20rem;
	left: 19rem;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 9rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--white);

	@media (width >= 1440px) {
		font-size: 14rem;
		bottom: 27rem;
		left: 32rem;
	}
`;

export const CardExpirationDate = styled.div`
	position: absolute;
	bottom: 20rem;
	right: 21rem;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 9rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--white);

	@media (width >= 1440px) {
		font-size: 14rem;
		bottom: 27rem;
		right: 32rem;
	}
`;

export const CardBackFace = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: block;
	border-radius: 6rem;
	width: 286rem;
	height: 157rem;
	background: linear-gradient(169deg, #fff 0%, #d2d3d9 100%);
	overflow: hidden;

	@media (width >= 1440px) {
		border-radius: 10rem;
		width: 447rem;
		height: 245rem;
		bottom: 0;
		right: 0;
		top: unset;
	}
`;

export const MagneticStripe = styled.div`
	position: absolute;
	top: 15rem;
	left: 0;
	width: 100%;
	height: 34rem;
	background: #2f2f2f;

	@media (width >= 1440px) {
		height: 54rem;
		top: 23rem;
	}
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

	@media (width >= 1440px) {
		width: 361rem;
		height: 38rem;
		top: 101rem;
	}
`;

export const Cvv = styled.div`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 9rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--white);
	position: absolute;
	right: 11rem;
	top: 50%;
	transform: translateY(-50%);

	@media (width >= 1440px) {
		font-size: 14rem;
		right: 16rem;
	}
`;

export const EndorsementPanel = styled.svg`
	display: none;

	@media (width >= 1440px) {
		display: block;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 47rem;
	}
`;
