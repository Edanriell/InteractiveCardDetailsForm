export const formatCardNumber = (value: string): string => {
	// Remove all non-digit characters
	const digits = value.replace(/\D/g, "");
	// Take only first 16 digits
	const truncated = digits.slice(0, 16);
	// Add spaces after every 4 digits
	return truncated.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};
