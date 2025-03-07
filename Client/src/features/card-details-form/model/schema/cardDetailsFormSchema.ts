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
		.transform((value) => value.replace(/\s+/g, "")) // remove spaces before validation
		.matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
		.test("luhn", "Enter a valid card number", (value) => {
			if (!value) return false;
			const checksum = value
				.split("")
				.reverse()
				.map(Number)
				.reduce((sum, digit, index) => {
					if (index % 2 === 1) {
						const doubled = digit * 2;
						return sum + (doubled > 9 ? doubled - 9 : doubled);
					}
					return sum + digit;
				}, 0);
			return checksum % 10 === 0;
		}),

	cardExpiryMonth: yup
		.string()
		.required("Can’t be blank")
		.matches(/^(0?[1-9]|1[0-2])$/, "Invalid month"),

	cardExpiryYear: yup
		.string()
		.required("Expiration year is required")
		.matches(/^\d{2}$/, "Invalid year")
		.test("expiry-date", "Card has expired", function (year, { parent }) {
			const month = Number(parent.cardExpiryMonth);
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear() % 100;
			const currentMonth = currentDate.getMonth() + 1;

			const inputYear = Number(year);

			if (!year || year.trim().length !== 2) {
				return false; // fails if year is blank or invalid
			}

			if (!month || month < 1 || month > 12) {
				return false; // month must be valid first
			}

			// Validation clearly checks expiry date properly
			return inputYear > currentYear || (inputYear === currentYear && month >= currentMonth);
		}),

	cardCvcCode: yup
		.string()
		.required("Can’t be blank")
		.matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits")
});
