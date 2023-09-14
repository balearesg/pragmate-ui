import * as React from 'react';
import { Chip } from './badge';
export /*bundle*/ function Chips(props) {
	const { items, children } = props;

	const properties = { ...props };
	['items', 'children', 'type'].forEach(key => delete properties[key]); // ['items', 'children', 'type'

	const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
	properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;

	const output = items?.map((item, index) => <Chip type={props.type} key={index} item={item} />);

	return (
		<div {...properties}>
			{output} {children}
		</div>
	);
}
