import { type CardDetailsFormData } from "../../ui/card-details-form";

export const formatCardDetails = (data: CardDetailsFormData) => {
	return {
		holderFullName: data.cardHolderFullName
			.trim()
			.toLowerCase()
			.split(/\s+/)
			.filter((word) => word.length > 0)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" "),
		number: data.cardNumber.replace(/\s+/g, "").trim(),
		expiryMonth: Math.min(Math.max(1, Number(data.cardExpiryMonth)), 12),
		expiryYear: Number("20" + data.cardExpiryYear),
		cvcCode: data.cardCvcCode.toString().replace(/\D/g, "").slice(0, 4)
	};
};
