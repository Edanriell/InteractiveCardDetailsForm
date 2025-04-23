import { useEffect, useRef } from "react";

export const useIsFirstRender = () => {
	const isFirstRender = useRef(true);

	useEffect(() => {
		// After the first *committed* render, set to false
		isFirstRender.current = false;
	}, []);

	return isFirstRender.current;
};
