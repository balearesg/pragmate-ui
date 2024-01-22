import React from 'react';
import { Checkbox, CheckboxGroup } from 'pragmate-ui/form';

export function CheckboxGroupExample() {
	const [selectedValue, setSelectedValue] = React.useState(false);
	const [selectedValueCheckbox, setSelectedValueCheckbox] = React.useState(false);

	const options = [
		{ label: 'Example 1', name: 'check' },
		{ label: 'Example 2', name: 'check2' },
		{ label: 'Example 3', name: 'check3' },
	];

	const optionsColumns = [
		{ label: 'Example 1', name: 'check4' },
		{ label: 'Example 2', name: 'check5' },
		{ label: 'Example 3', name: 'check6' },
	];

	return (
		<div>
			<h4>Default</h4>
			<form className='container-checkbox'>
				<CheckboxGroup options={options} />
			</form>

			<h4>Column</h4>
			<form className='container-checkbox'>
				<CheckboxGroup options={optionsColumns} direction='column' />
			</form>
		</div>
	);
}
