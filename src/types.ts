import type { FieldError } from "react-hook-form";
import type * as CONSTANTS from "./constants";

type Constants = typeof CONSTANTS;
type InputNames = Constants[keyof Constants];

export interface StyledInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	errors?: FieldError;
	name: string;
}

export type FormInputs = {
	[K in InputNames]?: string;
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
	name: InputNames;
	validation: ValidationRule;
}

export interface Inputs {
	[key: string]: InputConfig;
}
