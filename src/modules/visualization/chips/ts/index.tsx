import React from 'react';

export /*bundle*/ function Chips(props) {
	const { children } = props;

	const properties = { ...props };
	['items', 'type', 'variant'].forEach(key => delete properties[key]);

	// const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
	const variant = props.variant || props.type || 'default';
	const cls = `pui-chip__container pui-chip__container--${variant}`;
	properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;

	return (
		<div {...properties}>
			<div className='content-chip'>{children}</div>
		</div>
	);
}
