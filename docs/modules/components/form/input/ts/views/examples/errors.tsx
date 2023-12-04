import React from 'react';
import { Error, Input, Label } from 'pragmate-ui/form';
import { UIExample } from 'pragmate-ui-docs/utils';

export function ErrorExamples() {
	return (
		<UIExample>
			<Input type='text' name='labels' label='Input text with error'>
				<Error show>Custom error management</Error>
			</Input>
			<Input type='text' name='labels' label='Input text with error'>
				<Error className='right' show>
					Custom error management
				</Error>
			</Input>
		</UIExample>
	);
}
