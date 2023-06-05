import * as React from 'react';
import { Radio } from 'simply-ui/form';

export function Results() {
	const [selectedValue, setSelectedValue] = React.useState('radio-1');

	function handleChange(event) {
		const { value } = event.target;
		setSelectedValue(value);
	}

	return (
		<form className="results-form">
			<Radio
				onChange={handleChange}
				checked={selectedValue === 'radio-1'}
				name="name"
				value="radio-1"
				label="Radio 1"
			/>
			<Radio
				onChange={handleChange}
				checked={selectedValue === 'radio-2'}
				name="name"
				value="radio-2"
				label="Radio 2"
			/>
		</form>
	);
}
