import { type FC } from "react";

import { CircleGroup } from "./styles.ts";

type SpinnerProps = {
	width?: number;
	height?: number;
};

export const Spinner: FC<SpinnerProps> = ({ width = 24, height = 24 }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<CircleGroup>
				<circle cx="3" cy="12" r="2" />
				<circle cx="21" cy="12" r="2" />
				<circle cx="12" cy="21" r="2" />
				<circle cx="12" cy="3" r="2" />
				<circle cx="5.64" cy="5.64" r="2" />
				<circle cx="18.36" cy="18.36" r="2" />
				<circle cx="5.64" cy="18.36" r="2" />
				<circle cx="18.36" cy="5.64" r="2" />
			</CircleGroup>
		</svg>
	);
};
