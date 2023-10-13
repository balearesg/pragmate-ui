import * as React from 'react';
import {ChangeEvent, useRef, useState, MutableRefObject} from 'react';
import {listClassName} from './class-list';
import type {IProps, state} from './type';
import {InputContext} from './context';
import {PropsRendering} from './props-rendering';
export /*bundle*/
function Input(props: IProps): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);

	const [state, setState] = useState<state>({
		value: props.value ?? '',
		errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
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
	let cls: string = props.className ? `${props.className} pragmate-element-input` : 'pragmate-element-input';
	cls += props.icon || props.loading || props.password || props.required ? ' has-icon' : '';
	cls += props.disabled ? ' disabled' : '';
	cls += props.hasError ? ' error' : '';
	cls += props.floating ? ' floating--label' : '';

	listClassName.forEach(prop => {
		delete properties[prop];
	});

	const value = {state, props, setState, input};
	return (
		<InputContext.Provider value={value}>
			<div className={cls}>
				<input
					ref={input}
					{...properties}
					name={props.name}
					onChange={handleChange}
					type={state.type}
					value={typeof props.value !== 'undefined' ? props.value : state.value}
					placeholder={props.placeholder ?? ' '}
					id={props.id ?? props.name}
				/>
				{props.children}
				<PropsRendering />
			</div>
		</InputContext.Provider>
	);
}
