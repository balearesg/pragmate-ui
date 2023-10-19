import React from 'react';

export /*bundle*/
function Badge({ children, value, visible = false, variant = 'default' }) {
	const classes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default'];
	let cls = `pui-badge${classes.includes(variant) ? ` pui-badge--${variant}` : ''}`;
	if (visible) cls += ' pui-badge--visible';
	if(value) cls += ' pui-badge--has-value';
	return (
		<div className='pui-badge__container'>
			{children}
			<span className={cls}>{value}</span>
		</div>
	);
}
