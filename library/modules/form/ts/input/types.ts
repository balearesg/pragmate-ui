import { InputHTMLAttributes, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	ref?: any;
	variant?: string;
	icon?: string;
	errorMessage: string;
	value?: string;
	label?: any;
	children?: ReactNode;
}

export type IPropsState = {
	value?: string;
	errorMessage: string;
	lengthMessage: string;
	emptyMessage: string;
	_hasError?: boolean;
	type: InputHTMLAttributes<HTMLInputElement>['type'];
};
export interface ILabelProps {
	position?: 'right' | 'bottom' | 'bottom-right' | 'floating';
	children?: React.ReactNode;
}
