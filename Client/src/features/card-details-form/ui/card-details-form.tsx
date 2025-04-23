import { type FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "motion/react";

import { Input } from "@shared/ui/input/ui";
import { Spinner } from "@shared/ui/spinner/ui";
import { SmoothButton } from "@shared/ui/smooth-button/ui";
import { Checkmark } from "@shared/ui/checkmark/ui";

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

import {
	Fieldset,
	Form,
	FormContentWrapper,
	FormField,
	FormFieldGroup,
	FormInputLabel,
	Legend,
	SuccessMessage,
	SuccessSection,
	SuccessTitle
} from "./styles";
import { useIsFirstRender } from "@shared/lib/hooks";

export type CardDetailsFormData = {
	cardHolderFullName: string;
	cardNumber: string;
	cardExpiryMonth: string;
	cardExpiryYear: string;
	cardCvcCode: string;
};

type CardDetailsFormState = "idle" | "loading" | "success" | "error";

export const CardDetailsForm: FC = () => {
	const [cardDetailsFormState, setCardDetailsFormState] = useState<CardDetailsFormState>("idle");
	const { setCardDetailsFormData } = useCardDetailsFormStore();
	const isFirstRender = useIsFirstRender();

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

	useEffect(() => {
		console.log(cardDetailsFormState);
		if (cardDetailsFormState === "error") {
			setTimeout(() => {
				setCardDetailsFormState("idle");
			}, 6000);
		}
	}, [cardDetailsFormState]);

	const onCardDetailsFormSubmit = async (data: CardDetailsFormData) => {
		const formattedCardDetailsFormData = formatCardDetails(data);

		if (cardDetailsFormState === "success") {
			setCardDetailsFormState("idle");
			return;
		}

		try {
			setCardDetailsFormState("loading");

			const response = await createCreditCard({
				cardDetailsFormData: formattedCardDetailsFormData
			});
			console.log(response);

			setCardDetailsFormState("success");
		} catch (error) {
			setCardDetailsFormState("error");

			console.error(error);
		}
	};

	return (
		<Form onSubmit={handleSubmit(onCardDetailsFormSubmit)}>
			<Fieldset>
				<AnimatePresence mode="wait">
					{cardDetailsFormState === "success" && (
						<SuccessSection
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								scale: [0.95, 1],
								rotateY: [-30, 0],
								filter: ["blur(2rem)", "blur(0rem)"]
							}}
							exit={{
								opacity: 0,
								scale: [1, 0.95],
								rotateY: [0, 30],
								filter: "blur(2rem"
							}}
							transition={{ type: "spring", duration: 1, bounce: 0 }}
							key={cardDetailsFormState}
							style={{
								perspective: "1000rem",
								transformStyle: "preserve-3d"
							}}
						>
							<Checkmark />
							<SuccessTitle>Thank You!</SuccessTitle>
							<SuccessMessage>We’ve added your card details</SuccessMessage>
						</SuccessSection>
					)}
					{cardDetailsFormState !== "success" && (
						<FormContentWrapper
							initial={isFirstRender ? false : { opacity: 1 }}
							animate={{
								opacity: 1,
								scale: [0.95, 1],
								rotateY: [30, 0],
								filter: ["blur(2rem)", "blur(0rem)"]
							}}
							exit={{
								opacity: 0,
								scale: [1, 0.95],
								rotateY: [0, -30],
								filter: "blur(2rem)"
							}}
							transition={{ type: "spring", duration: 1, bounce: 0 }}
							style={{
								perspective: "1000rem",
								transformStyle: "preserve-3d"
							}}
						>
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
						</FormContentWrapper>
					)}
				</AnimatePresence>
				<SmoothButton
					disabled={cardDetailsFormState === "error"}
					idle={<span>Confirm</span>}
					loading={<Spinner width={32} height={32} />}
					success={<span>Continue</span>}
					error={<span>Try again</span>}
					state={cardDetailsFormState}
				/>
			</Fieldset>
		</Form>
	);
};
