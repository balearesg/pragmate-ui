import * as React from 'react';
import { Badge } from './badge';
export /*bundle*/ function Badges(props) {
	const { items, children } = props;

	const properties = { ...props };
	['items', 'children', 'type'].forEach(key => delete properties[key]); // ['items', 'children', 'type'

	const cls = `${props.type ? `pui-badges__container--${props.type}` : ''}`;
	properties.className = `pui-badges__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;

	const output = items?.map((item, index) => <Badge type={props.type} key={index} item={item} />);

	return (
		<div {...properties}>
			{output} {children}
		</div>
	);
}
