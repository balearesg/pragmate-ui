import React from 'react';
import { IIconProps } from './types';

export function IconImg({ src, className, viewBox, ...props }) {
	const properties: IIconProps = Object.assign(
		{ ...props },
		{
			viewBox: props.viewBox ? props.viewBox : viewBox,
			className: !className ? 'pui-icon' : `pui-icon ${className}`,
		},
	);
	return <img src={src} {...properties} alt={props.name} />;
}
