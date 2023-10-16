import {InputHTMLAttributes, ReactNode} from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	ref?: any;
	errorMessage?: string;
	lengthMessage?: string;
	hasError?: boolean;
	icon?: string;
	label?: any;
	children?: ReactNode;
	password?: boolean;
	loading?: boolean;
	colorSpinner?: string;
	floating?: boolean;
	max?: string;
}

export type IPropsState = {
	value?: string | number | readonly string[];
	errorMessage: string;
	lengthMessage: string;
	emptyMessage: string;
	_hasError?: boolean;
	type: InputHTMLAttributes<HTMLInputElement>['type'];
};
