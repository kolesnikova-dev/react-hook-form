import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import type { Inputs, StyledInputProps, FormInputs } from "../types";

const INPUTS: Inputs = {
	FUND: {
		name: "fund",
		validation: {
			required: true,
			minLength: {
				value: 4,
				message: "must be 4 chars exactly",
			},
			maxLength: {
				value: 4,
				message: "must be 4 chars exactly",
			},
		},
	},
	TYPE: {
		name: "type",
		validation: {
			required: true,
		},
	},
};

const StyledInput = (props: StyledInputProps) => {
	const { errors } = props;
	return (
		<div className="flex flex-col">
			<input
				className="border rounded border-blue-600 placeholder:ps-1"
				{...props}
			/>
			<span className="h-4 text-red-400">{errors?.message}</span>
		</div>
	);
};

export const FormContainer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({ mode: "onChange" });
	const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-2 mb-2 mt-2">
				{Object.values(INPUTS).map(({ name, validation }) => (
					<StyledInput
						key={name}
						defaultValue=""
						placeholder={name}
						errors={errors[name]}
						{...register(name, { ...validation })}
					/>
				))}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
