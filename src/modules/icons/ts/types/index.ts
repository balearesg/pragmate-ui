import React, { SVGAttributes, Ref, ImgHTMLAttributes } from 'react';

export interface PuiIcon {
	icon?: string;
	viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
}
export interface IIconProps extends SVGAttributes<SVGSVGElement> {
	title?: string;
	icon?: string | PuiIcon;
	name?: string;
	src?: string;
	ref?: Ref<any>;
	className?: string;
	viewBox?: string;
}

export interface IIconButtonProps extends IIconProps {
	disabled?: boolean;
	onClick?: (event) => void;
	value?: string;
	id?: string;
	children?: React.ReactNode;
	navigate?: string;
	variant?: string;
	type?: 'button' | 'submit' | 'reset';
}

export interface IImageIconProps extends ImgHTMLAttributes<HTMLImageElement> {
	icon?: string | PuiIcon; // Only include common or image-specific props
	name?: string;
}
