import * as React from 'react';

export function Select(props) {
	const { options, label, events, ...othersSelectProps } = props;
	const optionsElements =
		options.length > 0 &&
		options.map((opt: string) => (
			<option key={opt} value={opt}>
				{opt}
			</option>
		));

	const id = othersSelectProps?.id ?? othersSelectProps.name;

	return (
		<label htmlFor={id}>
			<span>{label}</span>
			<select {...othersSelectProps} id={id} {...events}>
				{optionsElements}
			</select>
		</label>
	);
}
