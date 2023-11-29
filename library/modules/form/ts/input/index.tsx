import React from 'react';
import { useState } from 'react';
import type { ILabelProps, IProps, IPropsState } from './types';
import { InputContext } from './context';
import { Label } from './components/label';

import { ControlSelector } from './control';
import { Error } from './components/error';

interface IInputContainer {
	className?: string;
}
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
	const { hasError, errorMessage, variant, className, label, children, type } = props;

	const [value, setValue] = React.useState<string>(props.value ?? '');
	const [state, setState] = useState({});

	let cls = `pui-input${className ? ` ${className}` : ''}`;
	if (props.type === 'date') cls += ' pui-input--date';

	const variants = {
		unstyled: 'pui-input--unstyled',
		floating: 'pui-input--floating',
	};

	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	const providerValue = { props, state, setState, value, setValue };
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
