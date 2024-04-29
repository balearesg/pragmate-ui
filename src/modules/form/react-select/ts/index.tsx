import React from 'react';
import Select from 'react-select';
import { useStyles } from './use-styles';

export /*bundle*/
function ReactSelect(props) {
	let properties = { ...props };
	delete properties.onChange;
	const { ref } = useStyles();

	const singleValue = !properties.isMulti && props.options.find(item => item.value === props.value);
	let value = properties.isMulti ? props.value : singleValue;
	const onChange = params => {
		if (!props.onChange) return;
		const isMultiValues = properties?.isMulti;
		const values = isMultiValues && params.map(selectedItem => selectedItem.value);
		const value = isMultiValues ? values : params.value;
		const { name } = props;

		const target = {
			value,
			name,
		};

		props.onChange({
			target,
			currentTarget: target,
		});
	};

	return (
		<div className="pui-select" ref={ref}>
			{props.label && <label>{props.label}</label>}
			<Select classNamePrefix="pui-react-select" onChange={onChange} {...properties} value={value} />
		</div>
	);
}
