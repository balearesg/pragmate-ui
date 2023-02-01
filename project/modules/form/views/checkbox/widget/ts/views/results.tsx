import * as React from 'react';
import { BeyondCheckbox } from '@bgroup/ui/form';

export function Results() {
	const [selectedValue, setSelectedValue] = React.useState(false);

	function handleChange(event) {
		const { checked } = event.target;
		setSelectedValue(checked);
	};

	return (
		<form className="results-form">
			<BeyondCheckbox
				onChange={handleChange}
				checked={selectedValue}
				name='check'
			/>
		</form>
	);
}
