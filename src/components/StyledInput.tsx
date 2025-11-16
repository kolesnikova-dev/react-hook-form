import { forwardRef } from "react";
import type { StyledInputProps } from "../types";

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
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
