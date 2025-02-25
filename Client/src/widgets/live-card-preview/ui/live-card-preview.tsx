import { type FC } from "react";

import {
	CardBackFace,
	CardContainer,
	CardExpirationDate,
	CardFrontFace,
	CardHolderFullName,
	CardNumber,
	Circle,
	Cvv,
	HollowCircle,
	Logotype,
	MagneticStripe,
	SignaturePanel
} from "./styles";

type LiveCardPreviewProps = {
	cardholderFullName: string;
	cardNumber: string;
	cardExpiryMonth: string;
	cardExpiryYear: string;
	cardCvcCode: string;
};

export const LiveCardPreview: FC<LiveCardPreviewProps> = ({
	cardholderFullName,
	cardNumber,
	cardExpiryMonth,
	cardExpiryYear,
	cardCvcCode
}) => {
	return (
		<CardContainer>
			<CardBackFace>
				<MagneticStripe></MagneticStripe>
				<SignaturePanel>
					<Cvv>
						<span>0</span>
						<span>0</span>
						<span>0</span>
					</Cvv>
				</SignaturePanel>
			</CardBackFace>
			<CardFrontFace>
				<svg
					width="285"
					height="157"
					viewBox="0 0 285 157"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="0.395966"
						width="285"
						height="156.208"
						rx="6"
						fill="url(#paint0_linear_1_127)"
					/>
					<mask
						id="mask0_1_127"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="285"
						height="157"
					>
						<rect y="0.395966" width="285" height="156.208" rx="6" fill="white" />
					</mask>
					<g mask="url(#mask0_1_127)">
						<g opacity="0.847405" filter="url(#filter0_f_1_127)">
							<ellipse
								cx="181.918"
								cy="44.9789"
								rx="47.3886"
								ry="131.313"
								transform="rotate(45 181.918 44.9789)"
								fill="#D53AFF"
							/>
						</g>
						<g opacity="0.847405" filter="url(#filter1_f_1_127)">
							<ellipse
								cx="253.544"
								cy="41.3614"
								rx="47.3886"
								ry="131.313"
								transform="rotate(45 253.544 41.3614)"
								fill="#FF834A"
							/>
						</g>
						<g opacity="0.847405" filter="url(#filter2_f_1_127)">
							<ellipse
								cx="158.767"
								cy="154.949"
								rx="47.3886"
								ry="131.313"
								transform="rotate(45 158.767 154.949)"
								fill="#47A2FF"
							/>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_f_1_127"
							x="3.17755"
							y="-133.762"
							width="357.482"
							height="357.482"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="40"
								result="effect1_foregroundBlur_1_127"
							/>
						</filter>
						<filter
							id="filter1_f_1_127"
							x="74.803"
							y="-137.379"
							width="357.482"
							height="357.482"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="40"
								result="effect1_foregroundBlur_1_127"
							/>
						</filter>
						<filter
							id="filter2_f_1_127"
							x="-19.9742"
							y="-23.7915"
							width="357.482"
							height="357.482"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="40"
								result="effect1_foregroundBlur_1_127"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_1_127"
							x1="-81.9883"
							y1="22.8648"
							x2="-55.9666"
							y2="187.897"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#6348FE" />
							<stop offset="1" stopColor="#610595" />
						</linearGradient>
					</defs>
				</svg>
				<Logotype>
					<Circle />
					<HollowCircle />
				</Logotype>
				<CardNumber>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
				</CardNumber>
				<CardHolderFullName>
					<span>Jane Appleseed</span>
				</CardHolderFullName>
				<CardExpirationDate>
					<span>00</span>
					<span>/</span>
					<span>00</span>
				</CardExpirationDate>
			</CardFrontFace>
		</CardContainer>
	);
};
