import React from 'react';
import { PRAGMATE_ICONS } from './icons';
import { IIconProps, PuiIcon } from './types';
import { useIconTooltip } from './use-tooltip';

export /*bundle*/
const Icon = (props: IIconProps): JSX.Element => {
	let { icon, className, name, title } = props;
	const iconsList: PuiIcon = PRAGMATE_ICONS;
	const ref = React.useRef<SVGSVGElement>(null);

	// Usar el hook de tooltip
	const { tooltipJSX } = useIconTooltip(title, ref);

	if (!icon) return <div key="preload" />;

	let viewBox: string = '0 0 24 24';
	name = name ? name : typeof icon === 'string' ? icon : icon.icon;

	if (iconsList.hasOwnProperty(name)) icon = iconsList[name];

	if (typeof icon === 'object') {
		viewBox = icon.viewBox ? icon.viewBox : viewBox;
		icon = icon.icon;
	}

	const properties: IIconProps = Object.assign(
		{ ...props },
		{
			viewBox: props.viewBox ? props.viewBox : viewBox,
			className: !className ? 'pui-icon' : `pui-icon ${className}`,
		}
	);

	// Remove title property as it's handled by tooltip hook
	delete properties.title;
	delete properties.icon;

	props['data-item'] ? (properties['data-item'] = props['data-item']) : null;

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			<svg {...properties} data-icon-name={name} ref={ref}>
				<g dangerouslySetInnerHTML={{ __html: icon }} />
			</svg>
			{tooltipJSX}
		</div>
	);
};
