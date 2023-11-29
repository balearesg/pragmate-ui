import React, { useRef, ChangeEvent, MutableRefObject } from 'react';
import { useInputContext } from './context';
import { internalProps } from './internal-props';
import { IProps } from './types';
import { Icon } from 'pragmate-ui/icons';
export function ControlSelector() {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);

	const {
		setState,
		state,
		value,
		setValue,
		props: { name, id, placeholder },
		props,
	} = useInputContext();
	let properties: IProps = { ...props };

	internalProps.forEach(prop => delete properties[prop]);
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		const currentValue = event.currentTarget.value;
		setValue(currentValue);
		setState({
			...state,
			_hasError: false,
			value: event.currentTarget.value,
		});
	};
	const { type } = props;
	const children = [];
	if (type === 'date') {
		children.push(
			<Icon key='icon' icon='calendar' className='pui-input__icon' onClick={() => input.current.showPicker()} />
		);
	}
	return (
		<>
			<input
				ref={input}
				{...properties}
				name={name}
				onChange={handleChange}
				value={value}
				placeholder={placeholder ?? ' '}
				id={id ?? name}
			/>
			{children}
		</>
	);
}
