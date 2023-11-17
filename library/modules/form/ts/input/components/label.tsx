import React from 'react';
import { useInputContext } from '../context';
import { ILabelProps } from '../types';

export /*bundle */ function Label({ position, children }: ILabelProps = {}) {
	const { name, id } = useInputContext();

	const variants = {
		floating: 'floating-label',
		right: 'pui-input__label--right',
		bottom: 'pui-input__label--bottom',
		'bottom-right': 'pui-input__label--bottom-right',
	};
	const spanCls = `pui-input__label__span ${variants[position] ? ` ${variants[position]}` : ''}`;
	const cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;

	return (
		<>
			<label htmlFor={id ?? name} className={cls}>
				{children}
			</label>
		</>
	);
}
