import * as React from 'react';
import { Textarea } from 'pragmate-ui/form';
import { Code } from 'pragmate-ui/code';
const counterExample = `<Textarea value={value} maxlength='60' placeholder='Insert text...' onChange={handleChange} counter />`;

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
		<>
			<form onSubmit={handleSubmit}>
				<Textarea value={value} placeholder='Insert text...' onChange={handleChange} />
			</form>
			<h3>Counter</h3>
			<Code>{counterExample}</Code>
			<Textarea value={value} maxlength='60' placeholder='Insert text...' onChange={handleChange} counter />
		</>
	);
}
