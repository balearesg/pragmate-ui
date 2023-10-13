import React from 'react';

export function getError(state, inputRef, props): JSX.IntrinsicElements['span'] {
	const {hasError, max, lengthMessage, errorMessage} = props;
	if (!state._hasError && !hasError) return null;

	let messageError: string = state.emptyMessage;

	if (hasError || inputRef.current.value !== '') {
		messageError = errorMessage ? errorMessage : state.errorMessage;
	}

	if (max && parseFloat(inputRef.current.value) > parseInt(max)) {
		messageError = lengthMessage ? lengthMessage : state.lengthMessage + ` (max ${props.max})`;
	}

	return <span className="pragmate-element-input-error">{errorMessage}</span>;
}
