import { type FC } from "react";

import { CircleGroup } from "./styles.ts";

type SpinnerProps = {
	width?: number;
	height?: number;
	color?: string;
};

export const Spinner: FC<SpinnerProps> = ({
	width = 24,
	height = 24,
	color = "rgba(255,255,255,1)"
}) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<CircleGroup>
				<circle fill={color} cx="3" cy="12" r="2" />
				<circle fill={color} cx="21" cy="12" r="2" />
				<circle fill={color} cx="12" cy="21" r="2" />
				<circle fill={color} cx="12" cy="3" r="2" />
				<circle fill={color} cx="5.64" cy="5.64" r="2" />
				<circle fill={color} cx="18.36" cy="18.36" r="2" />
				<circle fill={color} cx="5.64" cy="18.36" r="2" />
				<circle fill={color} cx="18.36" cy="5.64" r="2" />
			</CircleGroup>
		</svg>
	);
};
