import { type ComponentPropsWithoutRef, type FC } from "react";

import {
	CardBackFace,
	Cvc,
	CvcNumber,
	EndorsementPanel,
	MagneticStripe,
	SignaturePanel
} from "./styles.ts";

type CardBackFaceProps = {
	cardCvcCode?: string;
} & ComponentPropsWithoutRef<"div">;

export const CardBack: FC<CardBackFaceProps> = ({ cardCvcCode = "000", ...rest }) => {
	const cardCvcNumbers = Array.from(
		{ length: Math.max(cardCvcCode.length, 3) },
		(_, i) => cardCvcCode[i] || "0"
	);

	const renderCardCvcCode = () => {
		return cardCvcNumbers.map((cvcNumber, index) => {
			if (cvcNumber === "0") {
				return (
					<CvcNumber
						key={`cvc-${cvcNumber}-${index}`}
						layoutId={`cvc-${cvcNumber}-${index}`}
						initial={false}
						animate={{
							opacity: [0, 1],
							y: [20, 0],
							filter: ["blur(2.4rem)", "blur(0rem)"]
						}}
						exit={{ opacity: 0 }}
					>
						{cvcNumber}
					</CvcNumber>
				);
			} else {
				return (
					<CvcNumber
						key={`cvc-${cvcNumber}-${index}`}
						initial={false}
						layoutId={`cvc-${cvcNumber}-${index}`}
						animate={{
							opacity: [0, 1],
							y: [-20, 0],
							filter: ["blur(2.4rem)", "blur(0rem)"]
						}}
						exit={{ opacity: 0 }}
					>
						{cvcNumber}
					</CvcNumber>
				);
			}
		});
	};

	return (
		<CardBackFace {...rest}>
			<MagneticStripe />
			<SignaturePanel>
				<Cvc>{renderCardCvcCode()}</Cvc>
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
