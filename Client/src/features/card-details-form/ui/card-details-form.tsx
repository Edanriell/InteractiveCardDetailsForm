import { type FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@shared/ui/button/ui";
import { Input } from "@shared/ui/input/ui";

import {
	formatCardDetails,
	formatCardNumber,
	formatCVC,
	formatExpiryDate,
	formatFullName
} from "../lib/functions";
import { cardDetailsFormSchema } from "../model/schema";
import { useCardDetailsFormStore } from "../model/store";
import { createCreditCard } from "../api";

import { Fieldset, Form, FormField, FormFieldGroup, FormInputLabel, Legend } from "./styles";

export type CardDetailsFormData = {
	cardHolderFullName: string;
	cardNumber: string;
	cardExpiryMonth: string;
	cardExpiryYear: string;
	cardCvcCode: string;
};

export const CardDetailsForm: FC = () => {
	const { setCardDetailsFormData } = useCardDetailsFormStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue
	} = useForm<CardDetailsFormData>({
		resolver: yupResolver(cardDetailsFormSchema),
		mode: "onChange"
	});

	const cardHolderFullName = watch("cardHolderFullName", "");
	const cardNumber = watch("cardNumber", "");
	const cardExpiryMonth = watch("cardExpiryMonth", "");
	const cardExpiryYear = watch("cardExpiryYear", "");
	const cardCvcCode = watch("cardCvcCode", "");

	useEffect(() => {
		setCardDetailsFormData({
			cardHolderFullName,
			cardNumber,
			cardExpiryMonth,
			cardExpiryYear,
			cardCvcCode
		});
	}, [cardHolderFullName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCvcCode]);

	useEffect(() => {
		const formattedCardHolderFullName = formatFullName(cardHolderFullName);
		const formattedCardNumber = formatCardNumber(cardNumber);
		const formattedCardExpiryMonth = formatExpiryDate(cardExpiryMonth);
		const formattedCardExpiryYear = formatExpiryDate(cardExpiryYear);
		const formattedCardCvcCode = formatCVC(cardCvcCode);

		if (cardHolderFullName !== formattedCardHolderFullName) {
			setValue("cardHolderFullName", formattedCardHolderFullName, { shouldValidate: true });
		}
		if (cardNumber !== formattedCardNumber) {
			setValue("cardNumber", formattedCardNumber, { shouldValidate: true });
		}
		if (cardExpiryMonth !== formattedCardExpiryMonth) {
			setValue("cardExpiryMonth", formattedCardExpiryMonth, { shouldValidate: true });
		}
		if (cardExpiryYear !== formattedCardExpiryYear) {
			setValue("cardExpiryYear", formattedCardExpiryYear, { shouldValidate: true });
		}
		if (cardCvcCode !== formattedCardCvcCode) {
			setValue("cardCvcCode", formattedCardCvcCode, { shouldValidate: true });
		}
	}, [cardHolderFullName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCvcCode]);

	const onCardDetailsFormSubmit = (data: CardDetailsFormData) => {
		const formattedCardDetailsFormData = formatCardDetails(data);

		createCreditCard({ cardDetailsFormData: formattedCardDetailsFormData });
	};

	return (
		<Form onSubmit={handleSubmit(onCardDetailsFormSubmit)}>
			<Fieldset>
				<Legend>Card Details</Legend>
				<Input
					name="cardHolderFullName"
					label="Cardholder Name"
					register={register}
					type="text"
					error={errors.cardHolderFullName?.message}
					placeholder="e.g. Jane Appleseed"
				/>
				<Input
					name="cardNumber"
					label="Card Number"
					register={register}
					type="text"
					error={errors.cardNumber?.message}
					placeholder="e.g. 1234 5678 9123 0000"
				/>
				<FormFieldGroup width="100%">
					<FormField>
						<FormInputLabel>Exp. Date (MM/YY)</FormInputLabel>
						<FormFieldGroup gap="11rem">
							<Input
								name="cardExpiryMonth"
								label="Expiry Month"
								srOnly={true}
								register={register}
								type="text"
								error={errors.cardExpiryMonth?.message}
								placeholder="MM"
							/>
							<Input
								name="cardExpiryYear"
								label="Expiry Year"
								srOnly={true}
								register={register}
								type="text"
								error={errors.cardExpiryYear?.message}
								placeholder="YY"
							/>
						</FormFieldGroup>
					</FormField>
					<Input
						name="cardCvcCode"
						label="CVC"
						register={register}
						type="text"
						error={errors.cardCvcCode?.message}
						placeholder="e.g. 123"
					/>
				</FormFieldGroup>
				<Button type="submit">Confirm</Button>
			</Fieldset>
		</Form>
	);
};
