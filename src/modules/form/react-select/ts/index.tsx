import React from 'react';
import Select from 'react-select';
import { useStyles } from './use-styles';
import isMobile from 'is-mobile';
import { MobileSelect } from './mobile-select';

export /*bundle*/
function ReactSelect(props) {
	let properties = { ...props };
	let { name } = props;
	const { ref } = useStyles();
	delete properties.onChange;
	let value = props.options.find(item => item.value === props.value);

	const onChange = ({ label, value }) => {
		if (!props.onChange) return;
		const target = { value, name };
		props.onChange({ target, currentTarget: { ...target } });
	};

	if (isMobile({ tablet: true })) return <MobileSelect {...props} />;

	const attrs = { onChange, ...properties, value };

	return (
		<div className='pui-select' ref={ref}>
			{props.label && <label>{props.label}</label>}
			<Select classNamePrefix='pui-react-select' {...attrs} />
		</div>
	);
}
