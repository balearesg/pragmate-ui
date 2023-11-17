import React, { useRef, ChangeEvent, MutableRefObject } from 'react';
import { useInputContext } from './context';
import { internalProps } from './internal-props';
import { IProps } from './types';
export function ControlSelector(props) {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);

	const {
		setState,
		state,
		props: { value, name, id, placeholder },
	} = useInputContext();
	let properties: IProps = { ...props };

	const isValue = typeof value !== 'undefined' ? value : state.value;

	internalProps.forEach(prop => delete properties[prop]);
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		setState({
			...state,
			_hasError: false,
			value: event.target.value,
		});
	};

	return (
		<input
			ref={input}
			{...properties}
			name={name}
			onChange={handleChange}
			type={state.type}
			value={isValue}
			placeholder={placeholder ?? ' '}
			id={id ?? name}
		/>
	);
}
