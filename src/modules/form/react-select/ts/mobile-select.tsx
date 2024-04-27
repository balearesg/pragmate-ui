import React from 'react';

export interface ISelect {
	title: string;
	value: string | number;
	onChange: (Event) => void;
	placeholder: string;
	options: { value: string | number; label: string }[];
}

export function MobileSelect({ options, ...props }: ISelect) {
	const output = options.map(({ value, label }) => (
		<option title={label} key={value} value={value}>
			{label}
		</option>
	));
	return (
		<div className='pui-mobile-select__container'>
			<select title='select' {...props} className='pui-mobile-select'>
				<option value='' disabled style={{ display: 'none' }}>
					{props.placeholder}
				</option>
				{output}
			</select>
		</div>
	);
}
