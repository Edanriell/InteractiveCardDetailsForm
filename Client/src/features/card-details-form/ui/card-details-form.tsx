import { type FC, Fragment, useId } from "react";

export const CardDetailsForm: FC = () => {
	const cardHolderFullNameInputId = useId();
	const cardNumberInputId = useId();
	const cardExpirationMonthInputId = useId();
	const cardExpirationYearInputId = useId();
	const cardCvcCodeInputId = useId();

	return (
		<Fragment>
			<form>
				<fieldset>
					<legend>Card Details</legend>
					<div>
						<label htmlFor={cardHolderFullNameInputId}>Cardholder Name</label>
						<input
							name="cardHolderFullName"
							id={cardHolderFullNameInputId}
							type="text"
						/>
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
									<label htmlFor={cardExpirationMonthInputId}>Expiry Month</label>
									<input
										name="cardExpiryMonth"
										id={cardExpirationMonthInputId}
										type="number"
									/>
								</div>
								<div>
									<label htmlFor={cardExpirationYearInputId}>Expiry Year</label>
									<input
										name="cardExpiryYear"
										id={cardExpirationYearInputId}
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
		</Fragment>
	);
};
