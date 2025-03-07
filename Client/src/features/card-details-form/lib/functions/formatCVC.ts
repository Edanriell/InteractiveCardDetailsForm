export const formatCVC = (value: string): string => {
	// Remove all non-digit characters and limit to 4 digits
	return value.replace(/\D/g, "").slice(0, 4);
};
