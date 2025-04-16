type createResourceParameters = {
	endpoint: string;
	data: Record<string, unknown>;
};

export const createResource = async <T>({
	endpoint,
	data
}: createResourceParameters): Promise<T> => {
	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			const errorText = await response.text();

			throw new Error(
				`Failed to create resource with status ${response.status}: ${errorText}`
			);
		}

		const responseData: T = await response.json();

		return responseData;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Network error occurred: ${error.message}`);
		} else {
			throw new Error("An unknown error occurred.");
		}
	}
};
