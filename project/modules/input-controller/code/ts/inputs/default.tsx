import * as React from 'react';

export function Input(props) {
	const { label, events, ...othersSelectProps } = props;
	const id = othersSelectProps?.id ?? othersSelectProps.name;

	return (
		<label htmlFor={id}>
			<span>{label}</span>
			<input {...othersSelectProps} {...events} id={id} />
		</label>
	);
}
