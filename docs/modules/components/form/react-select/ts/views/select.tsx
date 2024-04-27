import React, { useState } from 'react';

import { ReactSelect } from 'pragmate-ui/form/react-select';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

export function SelectComponent() {
	const [selectedOption, setSelectedOption] = React.useState(null);

	return <ReactSelect options={options} classNamePrefix='my-select' />;
}
