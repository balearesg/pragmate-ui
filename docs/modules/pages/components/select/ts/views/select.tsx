import React, { useState } from 'react';
import Select from 'react-select';
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
			<Select
				options={options}
				classNamePrefix='my-select'
				styles={{
					control: (provided, state) => ({
						...provided,
						...styles['my-select__control'],
						...(state.isFocused && styles['my-select__control--is-focused']),
					}),
					option: (provided, state) => ({
						...provided,
						...styles['my-select__option'],
						...(state.isSelected && styles['my-select__option--is-selected']),
						'&:hover': {
							...styles['my-select__option:hover'],
						},
					}),
				}}
			/>
		</div>
	);
}
