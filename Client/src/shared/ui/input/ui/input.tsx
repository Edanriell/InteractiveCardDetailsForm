import { type FC, useId } from "react";
import { AnimatePresence } from "motion/react";

import {
	InputErrorMessage,
	InputLabel,
	InputSrOnlyLabel,
	InputWrapper,
	StyledInput
} from "./styles";

type InputProps = {
	name: string;
	label: string;
	error?: string;
	srOnly?: boolean;
	placeholder?: string;
	type?: string;
	register: any; // This would be better typed with the actual register function type
};

export const Input: FC<InputProps> = ({
	name,
	label,
	error,
	srOnly,
	placeholder,
	type,
	register
}) => {
	const inputId = useId();

	return (
		<InputWrapper>
			{srOnly ? (
				<InputSrOnlyLabel htmlFor={inputId}>{label}</InputSrOnlyLabel>
			) : (
				<InputLabel htmlFor={inputId}>{label}</InputLabel>
			)}
			<StyledInput
				{...register(name)}
				animate={
					error
						? {
								borderColor: "#ff5050",
								backgroundImage:
									"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
							}
						: {
								borderColor: "#dfdee0",
								backgroundImage:
									"linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)"
							}
				}
				whileFocus={
					error
						? {}
						: {
								borderColor: "#ffffff00",
								backgroundImage:
									"linear-gradient(#fff, #fff), linear-gradient(177.23deg, #6348fe 6.47%, #610595 55.14%)"
							}
				}
				name={name}
				id={inputId}
				type={type}
				placeholder={placeholder}
				aria-invalid={error ? "true" : "false"}
			/>
			<AnimatePresence>
				{error && (
					<InputErrorMessage
						exit={{ opacity: 0, y: 6, filter: "blur(4rem)" }}
						animate={{ opacity: 1, y: [6, 0], filter: "blur(0)" }}
						role="alert"
					>
						{error}
					</InputErrorMessage>
				)}
			</AnimatePresence>
		</InputWrapper>
	);
};
