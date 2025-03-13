import { type ComponentPropsWithoutRef, type FC } from "react";

import { zeroString } from "../lib/functions";

import {
	CardExpirationDate,
	CardExpirationMonth,
	CardExpirationYear,
	CardFrontFace,
	CardFrontFaceLargeBackground,
	CardFrontFaceSmallBackground,
	CardHolderFullName,
	CardNumber,
	Circle,
	HollowCircle,
	Logotype,
	Number
} from "./styles.ts";

import { motion } from "motion/react";

type CardFrontProps = {
	cardHolderFullName?: string;
	cardNumber?: string;
	cardExpiryMonth?: string;
	cardExpiryYear?: string;
} & ComponentPropsWithoutRef<"div">;

export const CardFront: FC<CardFrontProps> = ({
	cardHolderFullName = "Jane Appleseed",
	cardNumber = "0000000000000000",
	cardExpiryMonth = "00",
	cardExpiryYear = "00",
	...rest
}) => {
	const cardNumbers = Array.from({ length: 16 }, (_, i) => cardNumber[i] || "0");

	const renderCardNumber = () => {
		return cardNumbers.map((number, index) => {
			if (number === "0") {
				return (
					<Number
						key={`${number}-${index}`}
						initial={false}
						animate={{
							opacity: [0, 1],
							y: [20, 0],
							filter: ["blur(2.4rem)", "blur(0rem)"]
						}}
					>
						{number}
					</Number>
				);
			} else {
				return (
					<Number
						key={`${number}-${index}`}
						initial={false}
						animate={{
							opacity: [0, 1],
							y: [-20, 0],
							filter: ["blur(2.4rem)", "blur(0rem)"]
						}}
					>
						{number}
					</Number>
				);
			}
		});
	};

	return (
		<CardFrontFace {...rest}>
			<CardFrontFaceSmallBackground
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_127" />
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_127" />
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_127" />
					</filter>
					<linearGradient
						id="paint0_linear_1_127"
						x1="-81.9883"
						y1="22.8648"
						x2="-55.9666"
						y2="187.897"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#6348FE" />
						<stop offset="1" stopColor="#610595" />
					</linearGradient>
				</defs>
			</CardFrontFaceSmallBackground>
			<CardFrontFaceLargeBackground
				width="447"
				height="245"
				viewBox="0 0 447 245"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="447" height="245" rx="10" fill="url(#paint0_linear_0_270)" />
				<mask
					id="mask0_0_270"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="447"
					height="245"
				>
					<rect width="447" height="245" rx="10" fill="white" />
				</mask>
				<g mask="url(#mask0_0_270)">
					<g opacity="0.847405" filter="url(#filter0_f_0_270)">
						<ellipse
							cx="272.655"
							cy="61.6554"
							rx="65.5"
							ry="181.5"
							transform="rotate(45 272.655 61.6554)"
							fill="#D53AFF"
						/>
					</g>
					<g opacity="0.847405" filter="url(#filter1_f_0_270)">
						<ellipse
							cx="371.655"
							cy="56.6554"
							rx="65.5"
							ry="181.5"
							transform="rotate(45 371.655 56.6554)"
							fill="#FF834A"
						/>
					</g>
					<g opacity="0.847405" filter="url(#filter2_f_0_270)">
						<ellipse
							cx="240.655"
							cy="213.655"
							rx="65.5"
							ry="181.5"
							transform="rotate(45 240.655 213.655)"
							fill="#47A2FF"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_0_270"
						x="56.1768"
						y="-154.823"
						width="432.957"
						height="432.957"
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_0_270" />
					</filter>
					<filter
						id="filter1_f_0_270"
						x="155.177"
						y="-159.823"
						width="432.957"
						height="432.957"
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_0_270" />
					</filter>
					<filter
						id="filter2_f_0_270"
						x="24.1768"
						y="-2.82317"
						width="432.957"
						height="432.957"
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
						<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_0_270" />
					</filter>
					<linearGradient
						id="paint0_linear_0_270"
						x1="-128.592"
						y1="35.2406"
						x2="-87.7792"
						y2="294.081"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#6348FE" />
						<stop offset="1" stopColor="#610595" />
					</linearGradient>
				</defs>
			</CardFrontFaceLargeBackground>
			<Logotype>
				<Circle />
				<HollowCircle />
			</Logotype>
			<CardNumber>{renderCardNumber()}</CardNumber>
			<CardHolderFullName>
				{cardHolderFullName.split("").map((letter, index) => (
					<motion.span
						style={{ display: "inline-block" }}
						initial={false}
						animate={{
							opacity: [0, 1],
							y: [20, 0],
							filter: ["blur(2.4rem)", "blur(0rem)"]
						}}
						key={`${letter}-${index}`}
					>
						{letter}
					</motion.span>
				))}
			</CardHolderFullName>
			<CardExpirationDate>
				<CardExpirationMonth>
					{cardExpiryMonth.split("").map((char, index) => (
						<span
							style={{ display: "inline-block" }}
							key={index + "-" + "card-expiry-month"}
						>
							{char}
						</span>
					))}
					{zeroString(2 - cardExpiryMonth.length)
						.split("")
						.map((char, index) => (
							<span key={index + "-" + "card-expiry-month-placeholder"}>{char}</span>
						))}
				</CardExpirationMonth>
				<span>/</span>
				<CardExpirationYear>
					{cardExpiryYear.split("").map((char, index) => (
						<span key={index + "-" + "card-expiry-year"}>{char}</span>
					))}
					{zeroString(2 - cardExpiryYear.length)
						.split("")
						.map((char, index) => (
							<span key={index + "-" + "card-expiry-year-placeholder"}>{char}</span>
						))}
				</CardExpirationYear>
			</CardExpirationDate>
		</CardFrontFace>
	);
};
