import React from 'react';
import {useInputContext} from './context';
import {Icon, IconButton} from 'pragmate-ui/icons';
import {Spinner} from 'pragmate-ui/spinner';
import {SyntheticEvent} from 'react';
import {getError} from './get-error';

export function RenderingProps() {
	const {state, props, setState, input} = useInputContext();

	const {password, required, label, id, icon, hasError, name, loading} = props;

	const changeType = (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
		event.stopPropagation();
		const target: EventTarget & HTMLButtonElement = event.currentTarget as HTMLButtonElement;
		setState({...state, type: target.dataset.type});
	};

	const iconButtonAttrs = {
		className: 'eye',
		onClick: changeType,
		'data-type': state.type === 'password' ? 'text' : 'password',
		icon: state.type === 'password' ? 'eye' : 'eye-slash',
	};

	const controlInput = password && <IconButton {...iconButtonAttrs} />;

	const spanRequired = required && <span className="pragmate-input__required-label">(*)</span>;

	const isLabel = label && (
		<label htmlFor={id ?? name}>
			{label} {spanRequired}{' '}
		</label>
	);

	const isIcon = icon && <Icon icon={icon} />;
	const isLoading = loading && <Spinner color={props.colorSpinner ?? 'var(--primary)'} type="primary" active />;

	const isRequiredWidthLabel = !label && required && <span className="pragmate-input__required-label">(*)</span>;

	const error: JSX.IntrinsicElements['span'] = getError(state, hasError, input);
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
