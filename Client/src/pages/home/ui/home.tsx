import { type FC } from "react";

import { CardDetailsForm } from "@features/card-details-form/ui";

import { LiveCardPreview } from "@widgets/live-card-preview/ui";
import { RootLayout } from "@widgets/layout/root/ui";

// import { with3D, withCursorFollow } from "@shared/lib/hocs";
import { Page, PageSection, PageTitle } from "./styles";

// const ThreeDLiveCardPreviewWithCursorFollow = with3D(withCursorFollow(LiveCardPreview));

export const HomePage: FC = () => {
	return (
		<RootLayout>
			<Page>
				<PageSection>
					<PageTitle>Interactive card details form</PageTitle>
					<LiveCardPreview>
						<LiveCardPreview.CardFront />
						<LiveCardPreview.CardBack />
					</LiveCardPreview>
					<CardDetailsForm />
				</PageSection>
			</Page>
		</RootLayout>
	);
};
