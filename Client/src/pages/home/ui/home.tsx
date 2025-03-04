import { type FC } from "react";

import { CardDetailsForm } from "@features/card-details-form/ui";

import { LiveCardPreview } from "@widgets/live-card-preview/ui";
import { RootLayout } from "@widgets/layout/root/ui";

import { with3D, withCursorFollow } from "@shared/lib/hocs";

import { Page, PageSection, PageTitle } from "./styles";

const ThreeDCardFrontWithCursorFollow = with3D(withCursorFollow(LiveCardPreview.CardFront));
const ThreeDCardBackWithCursorFollow = with3D(withCursorFollow(LiveCardPreview.CardBack));

export const HomePage: FC = () => {
	return (
		<RootLayout>
			<Page>
				<PageSection>
					<PageTitle>Interactive card details form</PageTitle>
					<LiveCardPreview>
						<ThreeDCardFrontWithCursorFollow width="447rem" height="245rem" />
						<div style={{ marginTop: "37rem", marginLeft: "94rem" }}>
							<ThreeDCardBackWithCursorFollow width="447rem" height="245rem" />
						</div>
					</LiveCardPreview>
					<CardDetailsForm />
				</PageSection>
			</Page>
		</RootLayout>
	);
};
