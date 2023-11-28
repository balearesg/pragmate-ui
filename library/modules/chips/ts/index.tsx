import React from 'react';
import { Chip } from './badge';
export /*bundle*/ function Chips(props) {
	const { children } = props;

	const properties = { ...props };
	['items', 'type'].forEach(key => delete properties[key]);

	const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
	properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;

	/* const output = items?.map((item, index) => <Chip type={props.type} key={index} item={item} />); */

	return (
		<div {...properties}>
			<div className='content-chip'>{children}</div>
		</div>
	);
}
