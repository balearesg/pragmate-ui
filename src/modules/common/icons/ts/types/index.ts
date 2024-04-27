import React, { SVGAttributes, Ref } from 'react';

export interface PuiIcon {
	icon?: string;
	viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
}
export interface IIconProps extends SVGAttributes<SVGSVGElement> {
	title?: string;
	icon?: string | PuiIcon;
	name?: string;
	src?: string;
	ref?: Ref<SVGSVGElement>;
	className?: string;
}
