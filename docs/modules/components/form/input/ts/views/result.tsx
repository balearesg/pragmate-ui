import * as React from 'react';
import {Input} from 'pragmate-ui/form';
import {Button} from 'pragmate-ui/components';
export function ResultsButton() {
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
			<Input type="text" name="name" label="Insert a text" onChange={handleChange} value={value}>
				<Button variant="primary">Search</Button>
			</Input>
		</form>
	);
}
