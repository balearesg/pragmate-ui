import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { useInputContext } from '../context';
interface HTMLInputWithPicker extends HTMLInputElement {
	showPicker: () => void;
}

export function Date(): JSX.Element {
	const { input, props, isDate } = useInputContext();

	if (!isDate) return null;
	const icon = props.icon || "calendar";
	const showPicker = () => {
		if (props.disabled) return;
		(input.current as any).showPicker()
	}
	return (
		<Icon
			key='icon'
			icon={icon}
			className='pui-input__icon'
			onClick={showPicker}
		/>
	);
}
