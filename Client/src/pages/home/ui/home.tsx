import { type FC } from "react";
import { RootLayout } from "@widgets/layout/root/ui";

import { CardDetailsForm } from "@features/card-details-form/ui";

import { Page, PageSection, PageTitle } from "./styles";

export const HomePage: FC = () => {
	return (
		<RootLayout>
			<Page>
				<PageSection>
					<CardDetailsForm />
					<PageTitle>Interactive card details form</PageTitle>
				</PageSection>
			</Page>
		</RootLayout>
	);
};
