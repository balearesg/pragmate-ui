import React from 'react';
import { useInputContext } from './context';

export function Label() {
	const { props } = useInputContext();

	const spanRequired = props.required && <span className="pui-input__required-label">(*)</span>;
	const showLabel = props.label && (
		<label htmlFor={props.id || props.name}>
			{props.label} {spanRequired}{' '}
		</label>
	);
	return <>{showLabel}</>;
}
