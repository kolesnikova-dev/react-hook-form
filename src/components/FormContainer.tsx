import { useEffect } from "react";
import dayjs from "dayjs";
import { Controller, useForm, useWatch } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { SubmitHandler } from "react-hook-form";

import { StyledInput } from "./StyledInput";

import type { Inputs, FormInputs } from "../types";
import * as CONSTANTS from "../constants";

const INPUTS: Inputs = {
	FUND: {
		name: CONSTANTS.FUND,
		validation: {
			required: true,
		},
	},
	SHORT_NAME: {
		name: CONSTANTS.SHORT_NAME,
		validation: {
			required: true,
		},
	},
	TYPE: {
		name: CONSTANTS.TYPE,
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
	EFFECTIVE_DATE: {
		name: CONSTANTS.EFFECTIVE_DATE,
		validation: {
			required: true,
		},
	},
};

const FORM_INPUTS = Object.values(INPUTS);

const names = FORM_INPUTS.map((item) => item.name);

const getDefaultValues = (names: string[]) => {
	const values: { [key: string]: string | null } = {};
	names.map((name) => {
		if (name === CONSTANTS.EFFECTIVE_DATE) {
			values[name] = null;
		}
		values[name] = "";
	});
	return values;
};

const defaultValues = getDefaultValues(names);

export const FormContainer = () => {
	const { handleSubmit, control, setValue } = useForm<FormInputs>({
		defaultValues,
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

	const fundValue = useWatch({
		control,
		name: CONSTANTS.FUND,
	});

	useEffect(() => {
		if (fundValue) {
			setValue(CONSTANTS.SHORT_NAME, fundValue);
		} else {
			setValue(CONSTANTS.SHORT_NAME, "");
		}
	}, [fundValue, setValue]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-2 mb-2 mt-2">
					{FORM_INPUTS.map(({ name, validation }) => {
						return name === CONSTANTS.EFFECTIVE_DATE ? (
							<Controller
								key={name}
								name={name}
								control={control}
								rules={validation}
								render={({ field: { onChange, value, ...field } }) => (
									<DatePicker
										{...field}
										className="hover:bg-(--color-transparent-purple) transition-colors"
										value={value ? dayjs(value) : null}
										closeOnSelect
										label={name}
										onChange={(newValue) => {
											onChange(newValue);
										}}
										slotProps={{
											textField: {
												error: false,
											},
										}}
									/>
								)}
							/>
						) : (
							<Controller
								key={name}
								name={name}
								control={control}
								rules={validation}
								render={({ field, fieldState }) => (
									<StyledInput errors={fieldState.error} {...field} />
								)}
							/>
						);
					})}
				</div>
				<button type="submit">Submit</button>
			</form>
		</LocalizationProvider>
	);
};
