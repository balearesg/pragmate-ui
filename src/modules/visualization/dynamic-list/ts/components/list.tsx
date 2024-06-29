import React, { HTMLAttributes } from 'react';
import { useDynamicListContext } from '../context';
import { DynamicItem } from './item';
import { IPuiProps } from '../definitions';

export /*bundle*/ function List({ className }: IPuiProps) {
	const { name, values, setValues } = useDynamicListContext();
	const attrs: HTMLAttributes<HTMLElement> = { className: `pui-dynamic-list ${className}` };

	const handleChange = (index, value) => {
		const newValue = [...values];
		newValue[index] = value;
		setValues(newValue);
	};

	const output = values.map((item, index) => {
		const setValue = value => handleChange(index, value);
		return (
			<DynamicItem value={item} key={`${name}.${index}`} index={index} identifier={item} setValue={setValue}>
				{item}
			</DynamicItem>
		);
	});

	const Container = 'div';
	return <Container {...attrs}>{output}</Container>;
}
