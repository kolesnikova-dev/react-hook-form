import type { FieldError } from "react-hook-form";

export interface StyledInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	errors?: FieldError;
	name: string;
}

export type FormInputs = {
	fund: string;
	type: string;
};

interface ValidationRule {
	required?: boolean;
	minLength?: {
		value: number;
		message: string;
	};
	maxLength?: {
		value: number;
		message: string;
	};
}

interface InputConfig {
	name: "fund" | "type";
	validation: ValidationRule;
}

export interface Inputs {
	[key: string]: InputConfig;
}
