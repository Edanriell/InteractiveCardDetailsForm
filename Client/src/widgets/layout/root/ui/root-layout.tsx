import { type FC, type ReactNode } from "react";

import { LayoutBackgroundSmall, LayoutRoot } from "./styles";

type RootLayoutProps = {
	children: ReactNode;
};

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<LayoutRoot>
			<LayoutBackgroundSmall
				width="100%"
				height="240"
				viewBox="0 0 375 240"
				fill="none"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="375" height="240" fill="#21092F" />
				<mask
					id="mask0_0_507"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="375"
					height="240"
				>
					<rect width="375" height="240" fill="white" />
				</mask>
				<g mask="url(#mask0_0_507)">
					<g opacity="0.25">
						<g opacity="0.847405" filter="url(#filter0_f_0_507)">
							<ellipse cx="209" cy="36" rx="113" ry="134" fill="#D53AFF" />
						</g>
						<g opacity="0.847405" filter="url(#filter1_f_0_507)">
							<ellipse cx="247" cy="63" rx="113" ry="134" fill="#FF834A" />
						</g>
						<g opacity="0.847405" filter="url(#filter2_f_0_507)">
							<ellipse cx="128" cy="203" rx="113" ry="134" fill="#47A2FF" />
						</g>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_0_507"
						x="-39.9141"
						y="-233.914"
						width="497.828"
						height="539.828"
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
							stdDeviation="67.957"
							result="effect1_foregroundBlur_0_507"
						/>
					</filter>
					<filter
						id="filter1_f_0_507"
						x="-1.91409"
						y="-206.914"
						width="497.828"
						height="539.828"
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
							stdDeviation="67.957"
							result="effect1_foregroundBlur_0_507"
						/>
					</filter>
					<filter
						id="filter2_f_0_507"
						x="-120.914"
						y="-66.9141"
						width="497.828"
						height="539.828"
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
							stdDeviation="67.957"
							result="effect1_foregroundBlur_0_507"
						/>
					</filter>
				</defs>
			</LayoutBackgroundSmall>
			{children}
		</LayoutRoot>
	);
};
