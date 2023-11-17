import React from 'react';
import { useInputContext } from '../context';

export function Label() {
	const { props } = useInputContext();
	const { required, label, id, name } = props;

	const spanRequired = required && <span className='pui-input__required-label'>(*)</span>;
	const showLabel = label && (
		<label htmlFor={id ?? name}>
			{label} {spanRequired}{' '}
		</label>
	);
	return <>{showLabel}</>;
}
