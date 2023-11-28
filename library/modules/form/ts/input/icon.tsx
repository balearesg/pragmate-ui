import React, { SyntheticEvent } from 'react';
import { useInputContext } from './context';
import { Icon, IconButton } from 'pragmate-ui/icons';

export const IconToDisplay = () => {
	const { state, setState, props, inputRef } = useInputContext();

	const handleClick = () => inputRef.current.focus();

	const changeType = (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
		event.stopPropagation();
		const target: EventTarget & HTMLButtonElement = event.currentTarget as HTMLButtonElement;
		setState(currentValue => ({ ...currentValue, type: target.dataset.type }));
	};

	const iconButtonAttrs = {
		className: 'eye',
		onClick: changeType,
		'data-type': props.type === 'password' ? 'text' : 'password',
		icon: props.type === 'password' ? 'eye' : 'eye-slash',
	};

	const defaultIcon = props.icon || 'user';
	const dateIcon = state.type === 'date' && <IconButton onClick={handleClick} icon={defaultIcon} />;
	const passwordIcon = state.type === 'password' && <IconButton {...iconButtonAttrs} />;
	const icon = dateIcon || passwordIcon || (props.icon && <Icon icon={props.icon} />);

	return <>{icon}</>;
};
