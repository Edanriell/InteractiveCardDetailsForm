import { createResource } from "@shared/api";
import { env } from "@shared/config";

import { type CreditCard } from "../model/entity";

const BASE_URL = env.VITE_API_BASE_URL;

type createCreditCardParameters = {
	cardDetailsFormData: Omit<CreditCard, "id">;
};

export const createCreditCard = async ({
	cardDetailsFormData
}: createCreditCardParameters): Promise<CreditCard> => {
	const endpoint = `${BASE_URL}/api/credit-cards`;

	try {
		const data = await createResource({ data: cardDetailsFormData, endpoint });
		console.log(data);
		return data as CreditCard;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
