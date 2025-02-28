import { type CardDetailsFormData } from "../ui/card-details-form";

export const formatCardDetails = (data: CardDetailsFormData) => {
	return {
		cardHolderFullName: data.cardHolderFullName
			.trim()
			.toLowerCase()
			.split(/\s+/)
			.filter((word) => word.length > 0)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" "),
		cardNumber: data.cardNumber.replace(/\s+/g, "").trim(),
		cardExpiryMonth: Math.min(Math.max(1, Number(data.cardExpiryMonth)), 12),
		cardExpiryYear: Number(data.cardExpiryYear),
		cardCvcCode: data.cardCvcCode.toString().replace(/\D/g, "").slice(0, 4)
	};
};
