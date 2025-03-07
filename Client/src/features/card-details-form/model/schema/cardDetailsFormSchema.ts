import * as yup from "yup";

export const cardDetailsFormSchema = yup.object({
	cardHolderFullName: yup
		.string()
		.required("Can’t be blank")
		.min(8, "Cardholder full name must be at least 8 characters")
		.matches(/^[a-zA-Z\s]+$/, "Cardholder full name can only contain letters and spaces"),

	cardNumber: yup
		.string()
		.required("Can’t be blank")
		.matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
		.test("luhn", "Invalid card number", (value) => {
			if (!value) return false;
			// Luhn algorithm for card number validation
			const digits = value.split("").map(Number);
			const checksum = digits.reverse().reduce((sum, digit, index) => {
				if (index % 2 === 1) {
					const doubled = digit * 2;
					return sum + (doubled > 9 ? doubled - 9 : doubled);
				}
				return sum + digit;
			}, 0);
			return checksum % 10 === 0;
		}),

	cardExpiryMonth: yup
		.number()
		.typeError("Can’t be blank")
		.required("Expiration month is required")
		.min(1, "Invalid month")
		.max(12, "Invalid month"),

	cardExpiryYear: yup
		.number()
		.typeError("Can’t be blank")
		.required("Expiration year is required")
		.min(24, "Card is expired")
		.max(99, "Invalid year")
		.test("expiry", "Card is expired", (year, context) => {
			if (!year) return false;
			const month = context.parent.cardExpiryMonth;
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear() % 100;
			const currentMonth = currentDate.getMonth() + 1;

			return year > currentYear || (year === currentYear && month >= currentMonth);
		}),

	cardCvcCode: yup
		.string()
		.required("Can’t be blank")
		.matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits")
});
