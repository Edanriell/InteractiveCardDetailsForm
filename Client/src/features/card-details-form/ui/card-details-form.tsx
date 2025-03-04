import { type FC, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formatCardDetails } from "../lib";
import { cardDetailsFormSchema } from "../model";

import {
	Button,
	ErrorMessage,
	Fieldset,
	Form,
	FormField,
	FormFieldGroup,
	FormInput,
	FormInputLabel,
	FormInputSrOnlyLabel,
	Legend
} from "./styles";

export type CardDetailsFormData = {
	cardHolderFullName: string;
	cardNumber: string;
	cardExpiryMonth: number;
	cardExpiryYear: number;
	cardCvcCode: string;
};

export const CardDetailsForm: FC = () => {
	const cardHolderFullNameInputId = useId();
	const cardNumberInputId = useId();
	const cardExpirationMonthInputId = useId();
	const cardExpirationYearInputId = useId();
	const cardCvcCodeInputId = useId();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CardDetailsFormData>({ resolver: yupResolver(cardDetailsFormSchema) });

	const onCardDetailsFormSubmit = (data: CardDetailsFormData) => {
		const formattedCardDetailsFormData = formatCardDetails(data);

		console.log(formattedCardDetailsFormData);
	};

	return (
		<Form onSubmit={handleSubmit(onCardDetailsFormSubmit)}>
			<Fieldset>
				<Legend>Card Details</Legend>
				<FormField>
					<FormInputLabel htmlFor={cardHolderFullNameInputId}>
						Cardholder Name
					</FormInputLabel>
					<FormInput
						{...register("cardHolderFullName")}
						name="cardHolderFullName"
						id={cardHolderFullNameInputId}
						type="text"
						placeholder="e.g. Jane Appleseed"
						aria-invalid={errors.cardHolderFullName ? "true" : "false"}
					/>
					{errors.cardHolderFullName && (
						<ErrorMessage role="alert">
							{errors.cardHolderFullName.message}
						</ErrorMessage>
					)}
				</FormField>
				<FormField>
					<FormInputLabel htmlFor={cardNumberInputId}>Card Number</FormInputLabel>
					<FormInput
						{...register("cardNumber")}
						name="cardNumber"
						id={cardNumberInputId}
						type="text"
						placeholder="e.g. 1234 5678 9123 0000"
						aria-invalid={errors.cardNumber ? "true" : "false"}
					/>
					{errors.cardNumber && (
						<ErrorMessage role="alert">{errors.cardNumber.message}</ErrorMessage>
					)}
				</FormField>
				<FormFieldGroup width="100%">
					<FormField>
						<FormInputLabel>Exp. Date (MM/YY)</FormInputLabel>
						<FormFieldGroup gap="11rem">
							<FormField>
								<FormInputSrOnlyLabel htmlFor={cardExpirationMonthInputId}>
									Expiry Month
								</FormInputSrOnlyLabel>
								<FormInput
									{...register("cardExpiryMonth")}
									name="cardExpiryMonth"
									id={cardExpirationMonthInputId}
									type="number"
									placeholder="MM"
									aria-invalid={errors.cardExpiryMonth ? "true" : "false"}
								/>
								{errors.cardExpiryMonth && (
									<ErrorMessage role="alert">
										{errors.cardExpiryMonth.message}
									</ErrorMessage>
								)}
							</FormField>
							<FormField>
								<FormInputSrOnlyLabel htmlFor={cardExpirationYearInputId}>
									Expiry Year
								</FormInputSrOnlyLabel>
								<FormInput
									{...register("cardExpiryYear")}
									name="cardExpiryYear"
									id={cardExpirationYearInputId}
									type="number"
									placeholder="YY"
									aria-invalid={errors.cardExpiryYear ? "true" : "false"}
								/>
								{errors.cardExpiryYear && (
									<ErrorMessage role="alert">
										{errors.cardExpiryYear.message}
									</ErrorMessage>
								)}
							</FormField>
						</FormFieldGroup>
					</FormField>
					<FormField>
						<FormInputLabel htmlFor={cardCvcCodeInputId}>CVC</FormInputLabel>
						<FormInput
							{...register("cardCvcCode")}
							name="cardCvcCode"
							id={cardCvcCodeInputId}
							type="number"
							placeholder="e.g. 123"
							aria-invalid={errors.cardExpiryYear ? "true" : "false"}
						/>
						{errors.cardCvcCode && (
							<ErrorMessage role="alert">{errors.cardCvcCode.message}</ErrorMessage>
						)}
					</FormField>
				</FormFieldGroup>
				<Button type="submit">Confirm</Button>
			</Fieldset>
		</Form>
	);
};
