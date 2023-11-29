import React from 'react';
import { Input } from 'pragmate-ui/form';
import { UIExample } from 'pragmate-ui-docs/utils';

export function DefaultExamples() {
	return (
		<UIExample>
			<h5>Unstyled input</h5>
			This variant creates a basic input field without any default styling.
			<Input variant='unstyled' type='text' name='name' label='Unstyled input' />
			<h5>Defaults</h5>
			The default variant is used to create a standard input field with default styling.
			<Input type='text' name='name' placeholder='With placeholder' />
			<Input type='text' required name='name' label='Input with label' />
			<Input type='date' name='name' label='Input label' />
			<h5>Floating Label</h5>
			This variant includes a floating label that animates as the user interacts with the input field.
			<Input variant='floating' type='text' name='name' label='Floating label' />
			<Input variant='floating' type='date' name='name' label='Floating label' />
		</UIExample>
	);
}
