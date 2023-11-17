import React from 'react';
import { useState } from 'react';
import type { ILabelProps, IProps, IPropsState } from './types';
import { InputContext } from './context';
import { Label } from './components/label';

import { ControlSelector } from './control';

export /*bundle*/
function Input(props: IProps): JSX.Element {
	const { errorMessage, variant, className, label, children, type } = props;

	const [value, setValue] = React.useState<string>(props.value ?? '');
	const [state, setState] = useState<IPropsState>({
		errorMessage: errorMessage ?? 'Formato incorrecto',
		lengthMessage: 'Cantidad máxima: ',
		emptyMessage: 'Este campo es requerido',
		type: props.type ?? 'text',
	});

	let cls = `pui-input${className ? ` ${className}` : ''}`;
	const variants = {
		unstyled: 'pui-input--unstyled',
		floating: 'pui-input--floating',
	};
	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	const providerValue = { state, props, setState, value, setValue };

	const labelSpecs: ILabelProps = {};

	if (variant === 'floating') labelSpecs.position = variant;

	return (
		<InputContext.Provider value={providerValue}>
			<div className={cls}>
				<ControlSelector />
				{children}
				{label && <Label {...labelSpecs}>{label}</Label>}
			</div>
		</InputContext.Provider>
	);
}
