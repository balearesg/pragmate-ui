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
