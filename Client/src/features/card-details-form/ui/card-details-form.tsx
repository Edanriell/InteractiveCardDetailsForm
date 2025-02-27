import { type FC, useId } from "react";

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

export const CardDetailsForm: FC = () => {
	const cardHolderFullNameInputId = useId();
	const cardNumberInputId = useId();
	const cardExpirationMonthInputId = useId();
	const cardExpirationYearInputId = useId();
	const cardCvcCodeInputId = useId();

	return (
		<Form>
			<Fieldset>
				<Legend>Card Details</Legend>
				<FormField>
					<FormInputLabel htmlFor={cardHolderFullNameInputId}>
						Cardholder Name
					</FormInputLabel>
					<FormInput
						name="cardHolderFullName"
						id={cardHolderFullNameInputId}
						type="text"
						placeholder="e.g. Jane Appleseed"
					/>
				</FormField>
				<FormField>
					<FormInputLabel htmlFor={cardNumberInputId}>Card Number</FormInputLabel>
					<FormInput
						name="cardNumber"
						id={cardNumberInputId}
						type="text"
						placeholder="e.g. 1234 5678 9123 0000"
					/>
				</FormField>
				<FormFieldGroup>
					<FormField>
						<FormInputLabel>Exp. Date (MM/YY)</FormInputLabel>
						<FormFieldGroup style={{ width: "152rem" }}>
							<FormField>
								<FormInputSrOnlyLabel htmlFor={cardExpirationMonthInputId}>
									Expiry Month
								</FormInputSrOnlyLabel>
								<FormInput
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
