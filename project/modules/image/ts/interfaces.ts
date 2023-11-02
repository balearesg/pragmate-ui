import { ImgHTMLAttributes, SyntheticEvent, ReactNode } from 'react';
export interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
	graphSrc?: string;
	size?: string;
	children?: ReactNode;
	error?: string;
	onError?: (e: SyntheticEvent<Element, Event>) => void;
}
/**
 * A React component that loads an image from a URL.
 * @param {props} props - props
 */
export interface IinitialState {
	size: string;
	error?: boolean;
	loaded: boolean;
	url?: string;
	onload?: undefined;
	src?: string;
	htmlLoaded?: boolean;
	loading?: string;
	onerror?: undefined;
}
