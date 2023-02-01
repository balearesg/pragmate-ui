import * as React from 'react';
import { BeyondTextarea } from '@bgroup/ui/form';

export function Results() {
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		const { value: textAreaValue } = event.target;
		setValue(textAreaValue);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// Logic...
	}

	return (
		<form onSubmit={handleSubmit}>
			<BeyondTextarea value={value} placeholder="Insert text..." onChange={handleChange} />
		</form>
	);
}
