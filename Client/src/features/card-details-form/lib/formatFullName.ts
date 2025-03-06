export const formatFullName = (value: string): string => {
	// Keep the current space if it's being typed
	if (value.endsWith(" ")) {
		// Remove all non-letter characters (except spaces), replace multiple spaces with single space
		const formatted = value.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, " ");

		// If there's already one space in the string (excluding the last one), don't allow another
		const spaceCount = formatted.trim().split(" ").length - 1;
		if (spaceCount >= 1) {
			return formatted.trim();
		}

		return formatted;
	}

	// Regular formatting for non-space-ending input
	return value
		.replace(/[^a-zA-Z\s]/g, "")
		.replace(/\s+/g, " ")
		.trim();
};
