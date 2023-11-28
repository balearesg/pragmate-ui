import { InputHTMLAttributes, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	ref?: any;
	error?: string;
	lengthMessage?: string;
	icon?: string;
	label?: any;
	children?: ReactNode;
	password?: boolean;
	loading?: boolean;
	colorSpinner?: string;
	floating?: boolean;
	max?: string;
}

export interface IInputState {
	type: string;
	value: string | number | readonly string[];
}
