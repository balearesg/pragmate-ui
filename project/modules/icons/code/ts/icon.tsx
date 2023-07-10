import React, { SVGAttributes } from 'react';
import { PRAGMATE_ICONS } from './icons';
interface icon {
	icon?: string;
	viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
}
interface props extends SVGAttributes<SVGSVGElement> {
	title?: string;
	icon?: any;
}
export /*bundle*/
const Icon = (props: props): JSX.Element => {
	let { icon, className } = props;
	const iconsList: icon = PRAGMATE_ICONS;

	if (!icon) return <div key='preload' />;

	let viewBox: string = '0 0 24 24';
	if (iconsList.hasOwnProperty(icon)) icon = iconsList[icon];

	if (typeof icon === 'object') {
		viewBox = icon.viewBox ? icon.viewBox : viewBox;
		icon = icon.icon;
	}

	const properties: props = Object.assign(
		{ ...props },
		{
			viewBox: props.viewBox ? props.viewBox : viewBox,
			className: !className ? 'pragmate-icon' : `pragmate-icon ${className}`,
		}
	);

	props.title ? (properties['data-tippy-content'] = props.title) : null;
	delete properties.icon;

	props['data-item'] ? (properties['data-item'] = props['data-item']) : null;

	return (
		<svg {...properties}>
			<g dangerouslySetInnerHTML={{ __html: icon }} />
		</svg>
	);
};
