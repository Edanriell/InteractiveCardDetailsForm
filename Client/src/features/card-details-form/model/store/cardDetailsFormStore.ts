import { create } from "zustand";

import { CardDetailsFormData } from "../../ui";

type CardDetailsFormStore = {
	cardDetailsFormData: Omit<CardDetailsFormData, "cardExpiryMonth" | "cardExpiryYear"> & {
		cardExpiryMonth: string;
		cardExpiryYear: string;
	};
	setCardDetailsFormData: (data: CardDetailsFormData) => void;
	resetCardDetailsFormData: () => void;
};

export const useCardDetailsFormStore = create<CardDetailsFormStore>((set) => ({
	cardDetailsFormData: {
		cardHolderFullName: "Jane Appleseed",
		cardNumber: "0000000000000000",
		cardExpiryMonth: "00",
		cardExpiryYear: "00",
		cardCvcCode: "000"
	},
	setCardDetailsFormData: (data: CardDetailsFormData) =>
		set({
			cardDetailsFormData: {
				...data,
				cardNumber: data.cardNumber.replace(/\s+/g, "").trim(),
				cardExpiryMonth: data.cardExpiryMonth.toString(),
				cardExpiryYear: data.cardExpiryYear.toString()
			}
		}),
	resetCardDetailsFormData: () =>
		set({
			cardDetailsFormData: {
				cardHolderFullName: "Jane Appleseed",
				cardNumber: "0000000000000000",
				cardExpiryMonth: "00",
				cardExpiryYear: "00",
				cardCvcCode: "000"
			}
		})
}));
