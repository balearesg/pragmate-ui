import React from 'react';
import { OptionSelect } from './option';

export /*bundle */ function Select(props) {
	const { children } = props;
	const attributes = { ...props };
	delete attributes.children;
	const value = ![undefined, null].includes(props.value) ?? '';

	let output = [];
	if (props.options) {
		props.options.forEach((item, key) => {
			output.push(<OptionSelect {...item} key={key} />);
		});
	}

	return (
		<select {...attributes}>
			{output}
			{children}
		</select>
	);
}
