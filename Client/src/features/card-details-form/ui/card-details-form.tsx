import { type FC, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "motion/react";

import { Button } from "@shared/ui/button/ui";

import {
	formatCardDetails,
	formatCardNumber,
	formatCVC,
	formatExpiryDate,
	formatFullName
} from "../lib/functions";
import { cardDetailsFormSchema } from "../model/schema";
import { useCardDetailsFormStore } from "../model/store";

import {
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
	cardExpiryMonth: string;
	cardExpiryYear: string;
	cardCvcCode: string;
};

export const CardDetailsForm: FC = () => {
	const { setCardDetailsFormData } = useCardDetailsFormStore();

	const cardHolderFullNameInputId = useId();
	const cardNumberInputId = useId();
	const cardExpirationMonthInputId = useId();
	const cardExpirationYearInputId = useId();
	const cardCvcCodeInputId = useId();

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
						{...register("cardNumber")}
						animate={
							errors.cardNumber
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
							errors.cardNumber
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
									{...register("cardExpiryMonth")}
									animate={
										errors.cardExpiryMonth
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
										errors.cardExpiryMonth
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
									{...register("cardExpiryYear")}
									animate={
										errors.cardExpiryYear
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
										errors.cardExpiryYear
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
							{...register("cardCvcCode")}
							animate={
								errors.cardCvcCode
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
								errors.cardCvcCode
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
