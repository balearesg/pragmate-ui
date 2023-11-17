import React from 'react';
import { Input } from 'pragmate-ui/form';

export function ResultsFloating() {
	return (
		<>
			<h3>label only</h3>
			<Input type='text' name='name' label='Insert a text' />
			<h3>Floating label</h3>
			<Input type='text' name='name' floating label='Insert a text' />
			<h3>Placeholder only</h3>
			<Input type='text' name='name' placeholder='Insert a text' />
			<h3>placeholder and label</h3>
			<Input type='text' name='name' floating label='Insert a text' />
		</>
	);
}
