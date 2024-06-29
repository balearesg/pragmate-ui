import React from 'react';
import { IPUIProps } from 'pragmate-ui/base';

interface IProps extends Omit<IPUIProps<IProps>, 'type'> {
	visible?: boolean;
	dot?: boolean;
	value: string;
}

export /*bundle*/ function Badge({ children, value, visible = false, variant = 'default', dot }: IProps) {
	const classes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default'];
	let cls = `pui-badge${classes.includes(variant) ? ` pui-badge--${variant}` : ''}`;
	if (visible) cls += ' pui-badge--visible';
	if (value) cls += ' pui-badge--has-value';
	if (dot) cls += ' dot';

	return (
		<div className='pui-badge__container'>
			<div className='content-children'>{children}</div>
			<span className={cls}>{value}</span>
		</div>
	);
}
