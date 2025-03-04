import { type FC } from "react";

import { CardBack } from "./card-back";
import { CardFront } from "./card-front";

import { CardContainer } from "./styles";

export const LiveCardPreview: FC = () => {
	return (
		<CardContainer>
			<CardFront />
			<CardBack />
		</CardContainer>
	);
};
