import * as React from 'react';

export function TextArea(props) {
	const { label, events, ...othersSelectProps } = props;
	const id = othersSelectProps?.id ?? othersSelectProps.name;

	return (
		<label htmlFor={id}>
			<span>{label}</span>
			<textarea {...othersSelectProps} {...events} id={id} />
		</label>
	);
}
