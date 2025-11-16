import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";
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
const FORM_INPUTS = Object.values(INPUTS);

const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
	({ errors, name, ...props }, ref) => (
		<div className="flex flex-col">
			<input
				className="border rounded border-(--color-light-purple) placeholder:ps-1 hover:bg-(--color-transparent-purple) transition-colors"
				ref={ref}
				placeholder={name}
				{...props}
			/>
			<span className="h-4 text-pink-400">{errors?.message}</span>
		</div>
	),
);

export const FormContainer = () => {
	const { handleSubmit, control } = useForm<FormInputs>({
		defaultValues: {
			fund: "",
			type: "",
		},
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-2 mb-2 mt-2">
				{FORM_INPUTS.map(({ name, validation }) => (
					<Controller
						key={name}
						name={name}
						control={control}
						rules={validation}
						render={({ field, fieldState }) => (
							<StyledInput errors={fieldState.error} {...field} />
						)}
					/>
				))}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
