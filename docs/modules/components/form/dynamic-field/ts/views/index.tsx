import * as React from 'react';
import { RemoveButton, DynamicField } from 'pragmate-ui/form/dynamic-field';
import { Input } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export /*bundle*/
function View() {
	const onChange = newFields => {
		console.log(newFields);
	};
	return (
		<div className='view'>
			<h1>Dynamic Field</h1>

			{/* <AddButton>
				<Button variant='primary'>Add</Button>
			</AddButton> */}

			<DynamicField
				onChange={onChange}
				value={[
					{
						pepito: 'juan',
					},
				]}
			>
				<Input type='text' name='pepito' />
				<Input type='text' name='lastname' />
				<Input type='text' name='dni' />
				<RemoveButton>
					<Button variant='primary'>Remove</Button>
				</RemoveButton>
			</DynamicField>
		</div>
	);
}
