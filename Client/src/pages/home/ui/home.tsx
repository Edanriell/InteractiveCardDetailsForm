import { type FC, useEffect } from "react";

import { CardDetailsForm } from "@features/card-details-form/ui";

import { LiveCardPreview } from "@widgets/live-card-preview/ui";
import { RootLayout } from "@widgets/layout/root/ui";

import { with3D, withCursorFollow } from "@shared/lib/hocs";
import { useWindowSize } from "@shared/lib/hooks";

import { useCardDetailsFormStore } from "@features/card-details-form/model/store";

import { CardBackWrapper, CardFrontWrapper, Page, PageSection, PageTitle } from "./styles";

const ThreeDCardFrontWithCursorFollow = with3D(withCursorFollow(LiveCardPreview.CardFront));
const ThreeDCardBackWithCursorFollow = with3D(withCursorFollow(LiveCardPreview.CardBack));

export const HomePage: FC = () => {
	const { cardDetailsFormData } = useCardDetailsFormStore();

	const { width } = useWindowSize();

	useEffect(() => {
		console.log(cardDetailsFormData);
	});

	return (
		<RootLayout>
			<Page>
				<PageSection>
					<PageTitle>Interactive card details form</PageTitle>
					<LiveCardPreview>
						<CardFrontWrapper>
							<ThreeDCardFrontWithCursorFollow
								cardHolderFullName={
									cardDetailsFormData.cardHolderFullName
										? cardDetailsFormData.cardHolderFullName
										: "Jane Appleseed"
								}
								// cardNumber={
								// 	cardDetailsFormData.cardNumber
								// 		? cardDetailsFormData.cardNumber
								// 		: "0000000000000000"
								// }
								// cardExpiryMonth={
								// 	cardDetailsFormData.cardExpiryMonth
								// 		? cardDetailsFormData.cardExpiryMonth
								// 		: "00"
								// }
								// cardExpiryYear={
								// 	cardDetailsFormData.cardExpiryYear
								// 		? cardDetailsFormData.cardExpiryYear
								// 		: "00"
								// }
								width={width && width >= 1440 ? "447rem" : "286rem"}
								height={width && width >= 1440 ? "245rem" : "157rem"}
								clipPath={
									width && width >= 1440
										? "path('M10 0h427c5.523 0 10 4.477 10 10v225c0 5.523-4.477 10-10 10h-427c-5.523 0-10-4.477-10-10v-225c0-5.523 4.477-10 10-10z')"
										: "path('M6 0h274c3.314 0 6 2.686 6 6v145c0 3.314-2.686 6-6 6h-274c-3.314 0-6-2.686-6-6v-145c0-3.314 2.686-6 6-6z')"
								}
								glowSize={width && width >= 1440 ? 180 : 120}
								glowIntensity={0.7}
							/>
						</CardFrontWrapper>
						<CardBackWrapper>
							<ThreeDCardBackWithCursorFollow
								// cardCvcCode={
								// 	cardDetailsFormData.cardCvcCode
								// 		? cardDetailsFormData.cardCvcCode
								// 		: "000"
								// }
								width={width && width >= 1440 ? "447rem" : "286rem"}
								height={width && width >= 1440 ? "245rem" : "157rem"}
								clipPath={
									width && width >= 1440
										? "path('M10 0h427c5.523 0 10 4.477 10 10v225c0 5.523-4.477 10-10 10h-427c-5.523 0-10-4.477-10-10v-225c0-5.523 4.477-10 10-10z')"
										: "path('M6 0h274c3.314 0 6 2.686 6 6v145c0 3.314-2.686 6-6 6h-274c-3.314 0-6-2.686-6-6v-145c0-3.314 2.686-6 6-6z')"
								}
								glowSize={width && width >= 1440 ? 180 : 120}
								glowIntensity={0.7}
							/>
						</CardBackWrapper>
					</LiveCardPreview>
					<CardDetailsForm />
				</PageSection>
			</Page>
		</RootLayout>
	);
};
