import * as React from 'react';
import {Input} from 'pragmate-ui/form';

export function Results() {
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		const {value: inputValue} = event.target;
		setValue(inputValue);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// logic...
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input type="text" name="name" floating label="Insert a text" onChange={handleChange} value={value} />
		</form>
	);
}
