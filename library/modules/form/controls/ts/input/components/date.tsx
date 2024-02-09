import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { useInputContext } from '../context';
interface HTMLInputWithPicker extends HTMLInputElement {
	showPicker: () => void;
}

export function Date(): JSX.Element {
	const { input, props, icon } = useInputContext();
	if (props.type !== 'date') return null;
	const iconValue = icon ? icon : 'calendar';
	return (
		<Icon
			key='icon'
			icon={iconValue}
			className='pui-input__icon'
			onClick={() => (input.current as any).showPicker()}
		/>
	);
}
