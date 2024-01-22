import React from 'react';
import { Checkbox, CheckboxGroup } from 'pragmate-ui/form';

export function Results() {
	const [selectedValue, setSelectedValue] = React.useState(false);
	const [selectedValueCheckbox, setSelectedValueCheckbox] = React.useState(false);

	function handleChange(event) {
		const { checked } = event.target;
		setSelectedValue(checked);
	}

	function handleChangeCheckbox(event) {
		const { checked } = event.target;
		setSelectedValueCheckbox(checked);
	}

	return (
		<form className='container-checkbox'>
			<div className='content'>
				<Checkbox onChange={handleChange} checked={selectedValue} name='check-example' label='Example 1' />
				<Checkbox
					onChange={handleChangeCheckbox}
					checked={selectedValueCheckbox}
					name='check-example2'
					label='example 2'
				/>
			</div>
		</form>
	);
}
