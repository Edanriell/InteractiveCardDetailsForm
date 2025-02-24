import { type FC, useId } from "react";

export const CardDetailsForm: FC = () => {
	const cardHolderFullNameInputId = useId();
	const cardNumberInputId = useId();
	const cardExpiryMonthInputId = useId();
	const cardExpiryYearInputId = useId();
	const cardCvcCodeInputId = useId();

	return (
		<form>
			<fieldset>
				<legend>Card Details</legend>
				<div>
					<label htmlFor={cardHolderFullNameInputId}>Cardholder Name</label>
					<input name="cardHolderFullName" id={cardHolderFullNameInputId} type="text" />
				</div>
				<div>
					<label htmlFor={cardNumberInputId}>Card Number</label>
					<input name="cardNumber" id={cardNumberInputId} type="text" />
				</div>
				<div>
					<div>
						<label>Exp. Date (MM/YY)</label>
						<div>
							<div>
								<label htmlFor={cardExpiryMonthInputId}>Expiry Month</label>
								<input
									name="cardExpiryMonth"
									id={cardExpiryMonthInputId}
									type="number"
								/>
							</div>
							<div>
								<label htmlFor={cardExpiryYearInputId}>Expiry Year</label>
								<input
									name="cardExpiryYear"
									id={cardExpiryYearInputId}
									type="number"
								/>
							</div>
						</div>
					</div>
					<div>
						<label htmlFor={cardCvcCodeInputId}>CVC</label>
						<input name="cardCvcCode" id={cardCvcCodeInputId} type="number" />
					</div>
				</div>
				<button type="submit">Confirm</button>
			</fieldset>
		</form>
	);
};
