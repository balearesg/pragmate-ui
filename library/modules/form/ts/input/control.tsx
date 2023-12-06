import React, { ChangeEvent, useEffect } from 'react';
import { useInputContext } from './context';
import { internalProps } from './internal-props';
import { IProps } from './interfaces';
import { IconContainer } from './components/icon-container';

export function ControlSelector(): JSX.Element {

	const {
		setState,
		state,
		value,
		setValue,
		props: { name, id, placeholder },
		props,
		input
	} = useInputContext();
	let properties: IProps = { ...props };
	useEffect(() => {
		setValue(props.value)
	}, [props.value])
	internalProps.forEach(prop => delete properties[prop]);
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		const currentValue = event.currentTarget.value;
		setValue(currentValue);
		setState({
			...state,
			_hasError: false,
			value: currentValue,
		});
	};

	return (
		<>
			<input
				ref={input}
				{...properties}
				name={name}
				onChange={handleChange}
				value={value ?? ""}
				placeholder={placeholder ?? ' '}
				id={id ?? name}
				type={state.type}
			/>
			<IconContainer />
		</>
	);
}
