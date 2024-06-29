import { HTMLAttributes } from 'react';
import { ToastTypes } from './model';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
	className: string;
	position: Partial<IPosition>;
}

export interface IProps {
	key: string;
	type: ToastTypes;
	message: string;
	duration?: number;
	id: string;
}

export interface IPosition {
	top: string;
	left: string;
	right: string;
	bottom: string;
}