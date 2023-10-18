import React from 'react';
import {Checkbox} from 'pragmate-ui/form';

export function Results() {
	const [selectedValue, setSelectedValue] = React.useState(false);
	const [selectedValueCheckbox, setSelectedValueCheckbox] = React.useState(false);

	function handleChange(event) {
		const {checked} = event.target;
		setSelectedValue(checked);
	}

	function handleChangeCheckbox(event) {
		const {checked} = event.target;
		setSelectedValueCheckbox(checked);
	}

	return (
		<form className="container-checkbox">
			<div className="content">
				<Checkbox onChange={handleChange} checked={selectedValue} name="check" />

				<Checkbox onChange={handleChangeCheckbox} checked={selectedValueCheckbox} name="check2" />
			</div>
		</form>
	);
}
