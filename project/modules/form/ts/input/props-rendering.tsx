import React from 'react';
import {useInputContext} from './context';
import {Icon, IconButton} from 'pragmate-ui/icons';
import {Spinner} from 'pragmate-ui/spinner';
import {SyntheticEvent} from 'react';
import {getError} from './get-error';

export function PropsRendering() {
	const {state, props, setState, input} = useInputContext();

	const changeType = (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
		event.stopPropagation();
		const target: EventTarget & HTMLButtonElement = event.currentTarget as HTMLButtonElement;
		setState({...state, type: target.dataset.type});
	};

	const spanRequired = props.required && <span className="pragmate-input__required-label">(*)</span>;

	const controlInput =
		props.password &&
		(state.type === 'password' ? (
			<IconButton onClick={changeType} data-type="text" className="eye" icon="eye" />
		) : (
			<IconButton onClick={changeType} className="eye" data-type="password" icon="eye-slash" />
		));

	const isLabel = props.label && (
		<label htmlFor={props.id ?? props.name}>
			{props.label} {spanRequired}{' '}
		</label>
	);

	const isIcon = props.icon && <Icon icon={props.icon} />;
	const isLoading = props.loading && <Spinner color={props.colorSpinner ?? 'var(--primary)'} type="primary" active />;

	const isRequiredWidthLabel = !props.label && props.required && (
		<span className="pragmate-input__required-label">(*)</span>
	);

	const error: JSX.IntrinsicElements['span'] = getError(state, props.hasError, input);
	return (
		<>
			{isIcon}
			{isLabel}
			{isLoading}
			{controlInput}
			{isRequiredWidthLabel}
			{error}
		</>
	);
}
