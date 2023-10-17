import React from 'react';
import {useInputContext} from './context';
import {Icon, IconButton} from 'pragmate-ui/icons';
import {Spinner} from 'pragmate-ui/spinner';
import {SyntheticEvent} from 'react';
import {getError} from './get-error';
import {Label} from './label';

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
	const showIcon = icon && <Icon icon={icon} />;
	const showLoading = loading && <Spinner color={props.colorSpinner ?? 'var(--primary)'} type="primary" active />;
	const showRequiredWidthLabel = !label && required && <span className="pui-input__required-label">(*)</span>;
	const error: JSX.IntrinsicElements['span'] = getError(state, hasError, input);

	return (
		<>
			{showIcon}
			<Label />
			{showLoading}
			{controlInput}
			{showRequiredWidthLabel}
			{error}
		</>
	);
}
