import React, { useState } from 'react';

import { css } from '@emotion/css';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const styles = css`
	.react-select-container {
		z-index: 9999;
	}
`;
export function SelectComponent() {
	const [selectedOption, setSelectedOption] = React.useState(null);

	return (
		<div className={styles}>
			<h1>Select component</h1>
		</div>
	);
}
