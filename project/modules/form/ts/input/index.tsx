import * as React from 'react';
import {ChangeEvent, useRef, useState, MutableRefObject} from 'react';
import {listClassName} from './class-list';
import type {IProps, PropsState} from './type';
import {InputContext} from './context';
import {RenderingProps} from './rendering-props';
export /*bundle*/
function Input(props: IProps): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);

	const {
		value,
		errorMessage,
		floating,
		hasError,
		disabled,
		icon,
		className,
		password,
		required,
		loading,
		children,
		id,
		name,
		placeholder,
	} = props;

	const [state, setState] = useState<PropsState>({
		value: value ?? '',
		errorMessage: errorMessage ?? 'Formato incorrecto',
		lengthMessage: 'Cantidad máxima: ',
		emptyMessage: 'Este campo es requerido',
		type: props.type ?? 'text',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		setState({
			...state,
			_hasError: false,
			value: event.target.value,
		});
	};

	let properties: IProps = {...props};
	let cls: string = className ? `${className} pui-element-input` : 'pui-element-input';
	cls += icon || loading || password || required ? ' has-icon' : '';
	cls += disabled ? ' disabled' : '';
	cls += hasError ? ' error' : '';
	cls += floating ? ' floating--label' : '';

	listClassName.forEach(prop => {
		delete properties[prop];
	});

	const listValue = {state, props, setState, input};

	const isValue = typeof value !== 'undefined' ? value : state.value;
	return (
		<InputContext.Provider value={listValue}>
			<div className={cls}>
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
				<RenderingProps />
				{children}
			</div>
		</InputContext.Provider>
	);
}
