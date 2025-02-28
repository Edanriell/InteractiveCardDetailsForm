import { type FC, useId } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
	Button,
	Fieldset,
	Form,
	FormField,
	FormFieldGroup,
	FormInput,
	FormInputLabel,
	FormInputSrOnlyLabel,
	Legend
} from "./styles";

type FormData = {
	cardHolderFullName: string;
	cardNumber: string;
	cardExpiryMonth: number;
	cardExpiryYear: number;
	cardCvcCode: number;
};

const schema = yup.object({
	cardHolderFullName: yup.string().required(),
	cardNumber: yup.string().required(),
	cardExpiryMonth: yup.number().positive().max(12).required(),
	cardExpiryYear: yup.number().positive().min(25).max(99).required(),
	cardCvcCode: yup.number().positive().required()
});

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
	} = useForm<FormData>({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log("submit");
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
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
					/>
				</FormField>
				<FormField>
					<FormInputLabel htmlFor={cardNumberInputId}>Card Number</FormInputLabel>
					<FormInput
						{...register("cardNumber")}
						name="cardNumber"
						id={cardNumberInputId}
						type="text"
						placeholder="e.g. 1234 5678 9123 0000"
					/>
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
								/>
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
								/>
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
						/>
					</FormField>
				</FormFieldGroup>
				<Button type="submit">Confirm</Button>
			</Fieldset>
		</Form>
	);
};
