export const formatExpiryDate = (value: string): string => {
	// Remove all non-digit characters and limit to 2 digits
	return value.replace(/\D/g, "").slice(0, 2);
};
