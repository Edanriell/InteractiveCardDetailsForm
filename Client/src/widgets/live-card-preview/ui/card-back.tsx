import { type ComponentPropsWithoutRef, type FC } from "react";

import { CardBackFace, Cvv, EndorsementPanel, MagneticStripe, SignaturePanel } from "./styles.ts";

type CardBackFaceProps = {
	cardCvcCode?: string;
} & ComponentPropsWithoutRef<"div">;

export const CardBack: FC<CardBackFaceProps> = ({ cardCvcCode = "000", ...rest }) => {
	const zeroString = (maxLength: number): string => {
		if (maxLength === 0) return "";

		return "0".repeat(maxLength);
	};

	return (
		<CardBackFace {...rest}>
			<MagneticStripe></MagneticStripe>
			<SignaturePanel>
				<Cvv>
					{cardCvcCode.split("").map((char) => (
						<span>{char}</span>
					))}
					{zeroString(3 - cardCvcCode.length)
						.split("")
						.map((char) => (
							<span>{char}</span>
						))}
				</Cvv>
			</SignaturePanel>
			<EndorsementPanel
				width="186"
				height="26"
				viewBox="0 0 186 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="115" height="4" rx="2" fill="#ADB5BE" />
				<rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
				<rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
				<rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
				<rect
					width="115"
					height="4"
					rx="2"
					transform="matrix(-1 0 0 1 186 22)"
					fill="#ADB5BE"
				/>
				<rect
					width="22"
					height="4"
					rx="2"
					transform="matrix(-1 0 0 1 65 22)"
					fill="#ADB5BE"
				/>
				<rect
					width="22"
					height="4"
					rx="2"
					transform="matrix(-1 0 0 1 37 22)"
					fill="#ADB5BE"
				/>
				<rect
					width="9"
					height="4"
					rx="2"
					transform="matrix(-1 0 0 1 9 22)"
					fill="#ADB5BE"
				/>
				<rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
				<rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
				<rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
				<rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
			</EndorsementPanel>
		</CardBackFace>
	);
};
