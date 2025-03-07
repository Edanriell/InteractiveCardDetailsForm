import { type FC, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "motion/react";

import {
	formatCardDetails,
	formatCardNumber,
	formatCVC,
	formatExpiryDate,
	formatFullName
} from "../lib/functions";
import { cardDetailsFormSchema } from "../model/schema";

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
						{...(register("cardHolderFullName"),
						{
							onChange: (e) => {
								e.target.value = formatFullName(e.target.value);
							}
						})}
						animate={
							errors.cardHolderFullName
								? {
										borderColor: "#ff5050",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
									}
								: {
										borderColor: "#dfdee0",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
									}
						}
						whileFocus={
							errors.cardHolderFullName
								? {}
								: {
										borderColor: "#ffffff00",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
									}
						}
						name="cardHolderFullName"
						id={cardHolderFullNameInputId}
						type="text"
						placeholder="e.g. Jane Appleseed"
						aria-invalid={errors.cardHolderFullName ? "true" : "false"}
					/>
					<AnimatePresence>
						{errors.cardHolderFullName && (
							<ErrorMessage
								exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
								animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
								layout
								role="alert"
							>
								{errors.cardHolderFullName.message}
							</ErrorMessage>
						)}
					</AnimatePresence>
				</FormField>
				<FormField>
					<FormInputLabel htmlFor={cardNumberInputId}>Card Number</FormInputLabel>
					<FormInput
						{...(register("cardNumber"),
						{
							onChange: (e) => {
								e.target.value = formatCardNumber(e.target.value);
							}
						})}
						animate={
							errors.cardHolderFullName
								? {
										borderColor: "#ff5050",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
									}
								: {
										borderColor: "#dfdee0",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
									}
						}
						whileFocus={
							errors.cardHolderFullName
								? {}
								: {
										borderColor: "#ffffff00",
										backgroundImage:
											"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
									}
						}
						name="cardNumber"
						id={cardNumberInputId}
						type="text"
						placeholder="e.g. 1234 5678 9123 0000"
						aria-invalid={errors.cardNumber ? "true" : "false"}
					/>
					<AnimatePresence>
						{errors.cardNumber && (
							<ErrorMessage
								exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
								animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
								layout
								role="alert"
							>
								{errors.cardNumber.message}
							</ErrorMessage>
						)}
					</AnimatePresence>
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
									{...(register("cardExpiryMonth"),
									{
										onChange: (e) => {
											e.target.value = formatExpiryDate(e.target.value);
										}
									})}
									animate={
										errors.cardHolderFullName
											? {
													borderColor: "#ff5050",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
												}
											: {
													borderColor: "#dfdee0",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
												}
									}
									whileFocus={
										errors.cardHolderFullName
											? {}
											: {
													borderColor: "#ffffff00",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
												}
									}
									name="cardExpiryMonth"
									id={cardExpirationMonthInputId}
									type="number"
									placeholder="MM"
									aria-invalid={errors.cardExpiryMonth ? "true" : "false"}
								/>
								<AnimatePresence>
									{errors.cardExpiryMonth && (
										<ErrorMessage
											exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
											animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
											layout
											role="alert"
										>
											{errors.cardExpiryMonth.message}
										</ErrorMessage>
									)}
								</AnimatePresence>
							</FormField>
							<FormField>
								<FormInputSrOnlyLabel htmlFor={cardExpirationYearInputId}>
									Expiry Year
								</FormInputSrOnlyLabel>
								<FormInput
									{...(register("cardExpiryYear"),
									{
										onChange: (e) => {
											e.target.value = formatExpiryDate(e.target.value);
										}
									})}
									animate={
										errors.cardHolderFullName
											? {
													borderColor: "#ff5050",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
												}
											: {
													borderColor: "#dfdee0",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
												}
									}
									whileFocus={
										errors.cardHolderFullName
											? {}
											: {
													borderColor: "#ffffff00",
													backgroundImage:
														"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
												}
									}
									name="cardExpiryYear"
									id={cardExpirationYearInputId}
									type="number"
									placeholder="YY"
									aria-invalid={errors.cardExpiryYear ? "true" : "false"}
								/>
								<AnimatePresence>
									{errors.cardExpiryYear && (
										<ErrorMessage
											exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
											animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
											layout
											role="alert"
										>
											{errors.cardExpiryYear.message}
										</ErrorMessage>
									)}
								</AnimatePresence>
							</FormField>
						</FormFieldGroup>
					</FormField>
					<FormField>
						<FormInputLabel htmlFor={cardCvcCodeInputId}>CVC</FormInputLabel>
						<FormInput
							{...(register("cardCvcCode"),
							{
								onChange: (e) => {
									e.target.value = formatCVC(e.target.value);
								}
							})}
							animate={
								errors.cardHolderFullName
									? {
											borderColor: "#ff5050",
											backgroundImage:
												"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
										}
									: {
											borderColor: "#dfdee0",
											backgroundImage:
												"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
										}
							}
							whileFocus={
								errors.cardHolderFullName
									? {}
									: {
											borderColor: "#ffffff00",
											backgroundImage:
												"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
										}
							}
							name="cardCvcCode"
							id={cardCvcCodeInputId}
							type="number"
							placeholder="e.g. 123"
							aria-invalid={errors.cardExpiryYear ? "true" : "false"}
						/>
						<AnimatePresence>
							{errors.cardCvcCode && (
								<ErrorMessage
									exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
									animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
									layout
									role="alert"
								>
									{errors.cardCvcCode.message}
								</ErrorMessage>
							)}
						</AnimatePresence>
					</FormField>
				</FormFieldGroup>
				<Button type="submit">Confirm</Button>
			</Fieldset>
		</Form>
	);
};
