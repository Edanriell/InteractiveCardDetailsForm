import { type FC, type ReactNode } from "react";

import { CardBack } from "./card-back";
import { CardFront } from "./card-front";

import { CardContainer } from "./styles";

type LiveCardPreviewComponents = {
	CardFront: typeof CardFront;
	CardBack: typeof CardBack;
};

type LiveCardPreviewProps = {
	children: ReactNode;
};

type LiveCardPreview = FC<LiveCardPreviewProps> & LiveCardPreviewComponents;

export const LiveCardPreview: LiveCardPreview = ({ children }) => {
	return <CardContainer>{children}</CardContainer>;
};

LiveCardPreview.CardFront = CardFront;
LiveCardPreview.CardBack = CardBack;

// TODO
// Create custom clipPath ! In form of card
// Fix card hover and styles across al window sizes
