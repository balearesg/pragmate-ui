import * as React from 'react';
import {InputHTMLAttributes, ChangeEvent, ReactNode, useRef, useState, SyntheticEvent, MutableRefObject} from 'react';
import {Icon, IconButton} from 'pragmate-ui/icons';
import {Spinner} from 'pragmate-ui/spinner';
interface props extends InputHTMLAttributes<HTMLInputElement> {
	ref?: any;
	errorMessage?: string;
	lengthMessage?: string;
	hasError?: boolean;
	icon?: string;
	label?: any;
	children?: ReactNode;
	password?: boolean;
	loading?: boolean;
	colorSpinner?: string;
	floating?: boolean;
	max?: string;
}
export /*bundle*/
function Input(props: props): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);
	type state = {
		value?: string | number | readonly string[];
		errorMessage: string;
		lengthMessage: string;
		emptyMessage: string;
		_hasError?: boolean;
		type: InputHTMLAttributes<HTMLInputElement>['type'];
	};
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
	const getError: Function = (hasError: boolean): JSX.IntrinsicElements['span'] => {
		if (!state._hasError && !hasError) return;

		let errorMessage: string = state.emptyMessage;

		if (hasError || input.current.value !== '')
			errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;

		if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
			errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
		}

		return <span className="pragmate-element-input-error">{errorMessage}</span>;
	};
	const changeType = (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
		event.stopPropagation();
		const target: EventTarget & HTMLButtonElement = event.currentTarget as HTMLButtonElement;
		setState({...state, type: target.dataset.type});
	};
	const error: JSX.IntrinsicElements['span'] = getError(props.hasError);
	let properties: props = {...props};
	let cls: string = props.className ? `${props.className} pragmate-element-input` : 'pragmate-element-input';
	cls += props.icon || props.loading || props.password || props.required ? ' has-icon' : '';
	cls += props.disabled ? ' disabled' : '';
	cls += props.hasError ? ' error' : '';
	cls += props.floating ? ' floating--label' : '';
	[
		'className',
		'hasError',
		'errorMessage',
		'children',
		'icon',
		'floating',
		'label',
		'password',
		'loading',
		'colorSpinner',
	].forEach(prop => {
		delete properties[prop];
	});
	const spanRequired = props.required && <span className="pragmate-input__required-label">(*)</span>;
	const controlInput =
		props.password &&
		(state.type === 'password' ? (
			<IconButton onClick={changeType} data-type="text" className="eye" icon="eye" />
		) : (
			<IconButton onClick={changeType} className="eye" data-type="password" icon="eye-slash" />
		));
	return (
		<div className={cls}>
			<>
				{props.icon && <Icon icon={props.icon} />}
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
				{error}
				{props.label && (
					<label htmlFor={props.id ?? props.name}>
						{props.label} {spanRequired}{' '}
					</label>
				)}
				{props.loading && <Spinner color={props.colorSpinner ?? 'var(--primary)'} type="primary" active />}
				{controlInput}
				{!props.label && props.required && <span className="pragmate-input__required-label">(*)</span>}
			</>
		</div>
	);
}
