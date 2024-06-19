import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
	className: string;
	position: Partial<IPosition>;
}

export interface IPosition {
	top: string;
	left: string;
	right: string;
	bottom: string;
}