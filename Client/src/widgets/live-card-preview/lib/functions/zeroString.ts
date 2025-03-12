export const zeroString = (maxLength: number): string => {
	if (maxLength <= 0) return "";

	return "0".repeat(maxLength);
};
