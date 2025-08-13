/**
 * File: ts\checkbox\group.tsx
 */
import React from 'react';
import { Checkbox } from './index';

export /*bundle*/ function CheckboxGroup(props) {
	const { options } = props;
	const output = options.map((option, index) => {

		const key = `${option.name}-${index}`
		const { label, ...rest } = option;
		return <Checkbox key={key} label={label} {...rest} />;
	});

	const directions = {
		column: 'column',
		row: 'row',
	};
	const direction = props.direction ?? `row`;
	const cls = `pui-checkbox-group pui-checkbox-group--${directions[direction]}`; // `pui-checkbox-group $;

	return (
		<div className={cls}>
			{props.label && <span className='pui-label'>{props.label}</span>}
			<div className='pui-group__items-container'>{output}</div>
		</div>
	);
}

/**
 * File: ts\checkbox\index.tsx
 */
import { IPUIProps } from 'pragmate-ui/base';
import React, { MouseEvent, RefAttributes, forwardRef, useEffect, useState } from 'react';
import { IFormCheckableProps } from '../types';

export /*bundle*/ const Checkbox: React.FC<IPUIProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
	props: IFormCheckableProps,
	ref: React.Ref<HTMLInputElement>,
): JSX.Element {
	const { checked, disabled, className, onChange, label } = props;

	const handleChange = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.stopPropagation();

		onChange && onChange(event);
	};
	let cls: string = `pui-checkbox ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
	const properties: IFormCheckableProps = Object.assign({}, props);

	['className', 'checked', 'name', 'onChange'].forEach((prop: string): void => {
		delete properties[prop];
	});

	const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	const name = props.name ?? 'pui-checkbox--name';
	const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;

	return (
		<div className={cls} onClick={handleChange}>
			<input
				ref={ref}
				type='checkbox'
				className='pui-checkbox--input'
				id={id}
				name={name}
				checked={checked}
				onChange={handleChange}
				{...properties}
			/>
			<label className='pui-checkbox--label' htmlFor={id}>
				<span>
					<svg viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span>{label}</span>
			</label>
		</div>
	);
});

/**
 * File: ts\form.tsx
 */
import { IPUIProps } from 'pragmate-ui/base';
import React, { FormEvent } from 'react';

export /*bundle*/ function Form(props: IPUIProps): JSX.Element {
	const { onSubmit, ...restProps } = props;
	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		event.stopPropagation();
		props.onSubmit(event);
	};

	return (
		<form onSubmit={handleSubmit} {...restProps}>
			{props.children}
		</form>
	);
}

/**
 * File: ts\input\components\date.tsx
 */
import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { useInputContext } from '../context';
interface HTMLInputWithPicker extends HTMLInputElement {
	showPicker: () => void;
}

export function Date(): JSX.Element {
	const { input, props, icon, isDate } = useInputContext();

	if (!isDate) return null;
	const iconValue = icon ? icon : 'calendar';

	const showPicker = () => {
		if (props.disabled) return;
		(input.current as any).showPicker()
	}
	
	return (
		<Icon
			key='icon'
			icon={iconValue}
			className='pui-input__icon'
			onClick={showPicker}
		/>
	);
}

/**
 * File: ts\input\components\error.tsx
 */
import React from 'react';

export /*bundle*/ function Error({
	show,
	message,
	className,
	children,
}: {
	show: boolean;
	message?: string;
	className?: string;
	children?: React.ReactNode;
}) {

	if (!show) return null;
	const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
	return (
		<span className={cls}>
			{message} {children}
		</span>
	);
}

/**
 * File: ts\input\components\icon-container.tsx
 */
import React from 'react'
import { Password } from './password'
import { useInputContext } from '../context';
import { Date } from './date';
import { Icon } from './icon';

export function IconContainer(): JSX.Element {
    const { props } = useInputContext();
    const types = {
        password: Password,
        date: Date,
        default: null,
        month: Date,
        week: Date,
        'datetime-local': Date
    };
    const output = [];
    if (!!types[props.type]) {
        const Control = types[props.type];
        output.push(<Control key="control" />)
    };

    if(!!props.icon) {
        output.push(<Icon key="icon" />)
    }
    return <>{output}</>
};

/**
 * File: ts\input\components\icon.tsx
 */
import React from "react";
import { Icon as PUIIcon } from "pragmate-ui/icons";
import { useInputContext } from "../context";
export function Icon(): JSX.Element {
    const {
        props: { icon },
        isDate
    } = useInputContext();
    if (!icon || isDate) return null;
    return <PUIIcon icon={icon} className="input-icon" />
}

/**
 * File: ts\input\components\label.tsx
 */
import React from 'react';
import { useInputContext } from '../context';
import { ILabelProps } from '../interfaces';
export /*bundle */ function Label({ required, position, children }: ILabelProps = {}) {
	const { name, id } = useInputContext();

	const variants = {
		floating: 'floating-label',
		right: 'pui-input__label--right',
		bottom: 'pui-input__label--bottom',
		'bottom-right': 'pui-input__label--bottom-right',
	};

	let cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;
	if (required) cls += ' is-required';
	return (
		<>
			<label htmlFor={id ?? name} className={cls}>
				<span className='label-content'> {children}</span>
			</label>
		</>
	);
}

/**
 * File: ts\input\components\password.tsx
 */
import React from "react";
import { useInputContext } from "../context";
import { IconButton } from "pragmate-ui/icons";

export function Password(): JSX.Element {
    const {
        state,
        setState,
    } = useInputContext();
    const changeType = (
        event: React.SyntheticEvent<HTMLButtonElement, Event>
    ): void => {
        event.stopPropagation();
        setState({
            ...state,
            type: state.type === "password" ? "text" : "password",

        });
    };
    const attrs = {
        className: "icon-eye",
        onClick: changeType,
        icon: state.type === "password" ? "eye" : "eye-slash",
    };

    return <IconButton {...attrs} />;
}

/**
 * File: ts\input\context.ts
 */
import * as React from 'react';
import { IInputContextValue } from './interfaces';

export const InputContext: React.Context<IInputContextValue> = React.createContext({});
export const useInputContext = (): IInputContextValue => React.useContext(InputContext);

/**
 * File: ts\input\control.tsx
 */
import React, { ChangeEvent, useEffect } from 'react';
import { useInputContext } from './context';
import { internalProps } from './internal-props';
import { IProps } from './interfaces';
import { IconContainer } from './components/icon-container';
import { BaseComponent } from 'pragmate-ui/base';

export function ControlSelector(): JSX.Element {
	const {
		setState,
		state,
		value,
		setValue,
		props: { name, id, placeholder },
		props,
		input,
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
			value: currentValue,
		});
	};
	const attrs = {
		id: id ?? name,
		placeholder: placeholder ?? '',
		value: value ?? '',
	};

	return (
		<>
			<input ref={input} {...properties} name={name} onChange={handleChange} type={state.type} {...attrs} />
			<IconContainer />
		</>
	);
}

/**
 * File: ts\input\index.tsx
 */
import React, { MutableRefObject, useRef } from 'react';
import { useState } from 'react';
import type { IInputContainer, IInputContextValue, ILabelProps, IProps, TState } from './interfaces';
import { InputContext } from './context';
import { Label } from './components/label';
import { ControlSelector } from './control';
import { Error } from './components/error';
import { BaseComponent } from 'pragmate-ui/base';

/**
 *
 * @param props
 *
 * 1. pattern property + existing error.
 * 2. Controlled Input where the implementer defines the error.
 * 3. Automated Input with multiple validations and error management.
 *
 * @returns
 */

export /*bundle*/
function Input(props: IProps): JSX.Element {
	const { hasError, errorMessage, variant, className, label, children, icon, type } = props;
	const [value, setValue] = React.useState<string>(props.value ?? '');
	const [state, setState] = useState<TState>({ type });
	const input: MutableRefObject<HTMLInputElement> = useRef(null);
	let cls: string = `pui-input${className ? ` ${className}` : ''}`;
	const dates = ['date', 'week', 'month', 'time', 'datetime-local'];
	const isDate = dates.includes(props.type);
	if (isDate) cls += ' pui-input--date';
	if (!!icon) cls += ' pui-input--icon';
	if (!!icon && variant === 'floating') cls += ' icon__floating';
	if (props.type === 'password') cls += ' pui-input--password';
	const variants = {
		unstyled: 'pui-input--unstyled',
		floating: 'pui-input--floating',
	};

	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	const providerValue: IInputContextValue = {
		props,
		state,
		setState,
		value: props.value ?? value,
		setValue,
		input,
		icon,
		isDate,
	};
	const labelSpecs: ILabelProps = { required: props.required };
	const attrs: IInputContainer = {};
	/**
	 * todo: review it.
	 */
	if (variant === 'floating') labelSpecs.position = variant;
	if (variant !== 'unstyled') attrs.className = cls;

	return (
		<InputContext.Provider value={providerValue}>
			<div className={cls}>
				<ControlSelector />
				{children}
				{label && <Label {...labelSpecs}>{label}</Label>}
				{errorMessage && <Error show={!!hasError} message={errorMessage} />}
			</div>
		</InputContext.Provider>
	);
}

/**
 * File: ts\input\interfaces\index.ts
 */
import { InputHTMLAttributes, MutableRefObject, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: any;
    variant?: string;
    icon?: string;
    errorMessage?: string;
    value?: string;
    label?: any;
    children?: ReactNode;
    hasError?: boolean;
    password?: boolean
}

export interface IPropsState {
    value?: string;
    errorMessage: string;
    lengthMessage: string;
    emptyMessage: string;
    _hasError?: boolean;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
};

export interface ILabelProps {
    position?: 'right' | 'bottom' | 'bottom-right' | 'floating';
    children?: React.ReactNode;
    required?: boolean;
};

export interface TState {
    value?: string | number | readonly string[];
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export interface IInputContextValue {
    state?: TState;
    id?: string;
    value?: string;
    name?: string;
    props?: IProps;
    icon?: string
    setState?: any;
    setValue?: (value) => void;
    input?: MutableRefObject<HTMLInputElement>,
    isDate?: boolean,
};

export interface IInputContainer {
    className?: string;
}

/**
 * File: ts\input\internal-props.ts
 */
/**
 * Internal props of the input component.
 * This array is used to filter the props passed to the input component.
 */
export const internalProps = [
	'className',
	'hasError',
	'errorMessage',
	'children',
	'icon',
	'label',
	'password',
	'loading',
	'variant',
	'type',

	'size',
	'loading',
	'error',
	'sources',
	'onError',
];

function generateAttributes(attrs, toRemove = []) {
	const propsToRemove = [...internalProps, ...toRemove];
	const properties = { ...attrs };
	propsToRemove.forEach(prop => delete properties[prop]);

	return properties;
}

/**
 * File: ts\model\manager.ts
 */
export class SelectorManager {
	static #instance;

	#selector;
	get selector() {
		return this.#selector;
	}
	constructor(selector) {}

	validate() {}
	static get(selector) {
		if (!this.#instance) {
			this.#instance = new SelectorManager(selector);
		}
		return this.#instance;
	}
}

/**
 * File: ts\radio.tsx
 */
import { IPUIProps } from 'pragmate-ui/base';
import React, { InputHTMLAttributes, MutableRefObject, useRef } from 'react';
import { IFormProps } from './types';

interface IPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

type CombinedProps = IPropsRadio & IPUIProps<HTMLInputElement>;

export /*bundle*/ function Radio(props: CombinedProps): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const onClick = (event): void => {
		event.stopPropagation();
		input.current.checked = true;
		if (!!props.onChange) props.onChange(event);
	};

	const properties: IFormProps = { ...props };
	delete properties.onChange;

	const cls: string = `pragmate-element-radio ${properties.className ? properties.className : ''}`;

	return (
		<label className={cls} onClick={onClick}>
			<input ref={input} {...properties} type='radio' onChange={onClick} />
			{properties.label && <span>{properties.label}</span>}
		</label>
	);
}

/**
 * File: ts\select\index.tsx
 */
import React from 'react';
import { OptionSelect } from './option';

export /*bundle */ function Select(props) {
	const { children } = props;
	const attributes = { ...props };
	delete attributes.children;
	delete attributes.options;

	const value = ![undefined, null].includes(props.value) ?? '';

	let output = [];
	if (props.options) {
		props.options.forEach((item, key) => {
			output.push(<OptionSelect {...item} key={key} />);
		});
	}
	const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
	const cls = `pui-input-select`;

	return (
		<div className={cls}>
			<label htmlFor={id}>{props.label}</label>
			<select className={cls} {...attributes}>
				{output}
				{children}
			</select>
		</div>
	);
}

/**
 * File: ts\select\option.tsx
 */
import React from 'react';
export /*bundle */ function OptionSelect(props) {
	const { children } = props;
	const attributes = { ...props };
	delete attributes.children;

	return <option {...attributes}>{children}</option>;
}

/**
 * File: ts\switch.tsx
 */
import React from 'react';
import { IFormCheckableProps } from './types';

export /* bundle */ function Switch(props: IFormCheckableProps): JSX.Element {
	const { checked, onChange, variant = 'primary', disabled, sizing = 'md', className } = props;

	const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

	React.useEffect(() => {
		if (isChecked === checked) return;
		setIsChecked(checked);
	}, [checked]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.stopPropagation();
		setIsChecked(event.currentTarget.checked);
		onChange && onChange(event);
	};

	let classNameSwitch: string = `pui-element-switch ${className ? className : ''}`;
	classNameSwitch += disabled ? ' disabled' : '';

	let cls: string = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
	cls += variant ? ` ${variant}` : '';
	cls += sizing ? ` ${sizing}` : '';

	const properties: IFormCheckableProps = { ...props };

	['className', 'checked', 'onChange', 'variant', 'sizing', 'id'].forEach(prop => {
		delete properties[prop];
	});

	const id = props.id ?? props.name ?? 'pui-element-switch';

	return (
		<div className={classNameSwitch}>
			<input
				className='pui-element-switch__checkbox'
				id={id}
				type='checkbox'
				checked={isChecked}
				onChange={handleChange}
				{...properties}
			/>
			<label className={cls} htmlFor={id}>
				<span className={`label__btn--slider`} />
			</label>
		</div>
	);
}

/**
 * File: ts\textarea\counter.tsx
 */
import React from 'react';

export function TextareaCounter({ counter, length, maxlength }) {
	if (!counter) return null;

	let cls = 'pui-textarea-counter';

	if (maxlength && length > maxlength - 15) {
		cls += length > maxlength - 5 ? ' pui-textarea-counter--danger' : ' pui-textarea-counter--warning';
	}
	return <span className={cls}>{length ?? 0}</span>;
}

/**
 * File: ts\textarea\error.tsx
 */
import React from 'react';

export function TextareaError({ state, hasError, errorMessage, value }) {
	if (!state._hasError && !hasError) return null;

	if (hasError || value !== '') errorMessage = errorMessage ? errorMessage : state.errorMessage;

	return <span className='pui-element-input-error'>{errorMessage}</span>;
}

/**
 * File: ts\textarea\index.tsx
 */
import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import { IProps, IState } from './types';
import { TextareaError } from './error';
import { TextareaCounter } from './counter';

let previousHeight = 0;
export /*bundle*/ function Textarea(props: IProps): JSX.Element {
	const input = props.ref ?? useRef();
	const { counter, errorMessage, autoresize = true, value = '' } = props;
	const [state, setState] = useState<IState>({ value, errorMessage });

	React.useEffect(() => {
		const textarea = input.current;
		textarea.style.height = 'auto';
		// Set new height based on scrollHeight
		textarea.style.height = `${textarea.scrollHeight}px`;
	}, [value]);
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);

		// const value = cleanExtraNewlines(event.target.value);
		const value = event.target.value;
		setState({
			...state,
			_hasError: false,
			value,
		});
	};

	let properties: IProps = { ...props };
	let cls: string = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
	cls += props.disabled ? ' disabled' : '';
	cls += props.hasError ? ' error' : '';
	['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(
		prop => delete properties[prop]
	);
	const variants = {
		unstyled: 'pui-textarea--unstyled',
		floating: 'pui-textarea--floating',
	};

	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	let clsLabel = '';
	if (props.required) cls += ' is-required';

	return (
		<div className={cls}>
			<textarea
				ref={input}
				{...properties}
				name={props.name}
				onChange={handleChange}
				value={value}
				placeholder={props.placeholder ?? ' '}
			/>
			{props.children}
			<TextareaError state={state} hasError={props.hasError} value={value} errorMessage={props.errorMessage} />
			{props.label && (
				<label className={clsLabel} htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<TextareaCounter length={input?.current?.value.length} maxlength={props.maxLength} counter={counter} />
		</div>
	);
}

/**
 * File: ts\textarea\types.ts
 */
import { TextareaHTMLAttributes, ReactNode } from 'react';
export interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	ref?: any;
	errorMessage?: string;
	max?: string;
	lengthMessage?: string;
	hasError?: boolean;
	label?: string;
	autoresize?: boolean;
	value?: string;
	counter?: boolean;
	children?: ReactNode;
	variant?: string;
	floating?: boolean;
}

export type TValue = string | number | readonly string[];
export interface IState {
	value?: TValue;
	errorMessage: string;
	_hasError?: boolean;
}

/**
 * File: ts\types\index.ts
 */
import { IPUIProps } from 'pragmate-ui/base';
export interface IFormProps extends IPUIProps<HTMLInputElement> {
	disabled?: boolean;
	label?: string;
	name?: string;
	sizing?: 'small' | 'medium' | 'large'; // Validate if size or sizing
}

export interface IFormCheckableProps extends IFormProps {
	checked?: boolean;
}

