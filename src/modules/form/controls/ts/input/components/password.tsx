import React from 'react';
import { useInputContext } from '../context';
import { IconButton } from 'pragmate-ui/icons';

export function Password(): JSX.Element {
	const { state, setState } = useInputContext();
	const changeType = (event: React.SyntheticEvent<HTMLButtonElement, Event>): void => {
		event.stopPropagation();
		setState({
			...state,
			type: state.type === 'password' ? 'text' : 'password',
		});
	};

	const title = state.type === 'password' ? 'Display password' : 'Hide password';

	const attrs = {
		className: 'icon-eye',
		onClick: changeType,
		icon: state.type === 'password' ? 'eye' : 'eye-slash',
		id: 'displayPassword',
		title,
		ariaLabel: title,
	};

	return <IconButton {...attrs} />;
}
