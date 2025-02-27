import { type FC } from "react";

import { CardDetailsForm } from "@features/card-details-form/ui";

import { LiveCardPreview } from "@widgets/live-card-preview/ui";
import { RootLayout } from "@widgets/layout/root/ui";

import { Page, PageSection, PageTitle } from "./styles";

export const HomePage: FC = () => {
	return (
		<RootLayout>
			<Page>
				<PageSection>
					<PageTitle>Interactive card details form</PageTitle>
					<LiveCardPreview />
					<CardDetailsForm />
				</PageSection>
			</Page>
		</RootLayout>
	);
};
