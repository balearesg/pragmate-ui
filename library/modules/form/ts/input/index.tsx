import React from 'react';
import { useState } from 'react';
import type { ILabelProps, IProps, IPropsState } from './types';
import { InputContext } from './context';
import { Label } from './components/label';

import { ControlSelector } from './control';

export /*bundle*/
function Input(props: IProps): JSX.Element {
	const { value, errorMessage, variant, className, label, children, id, name, placeholder } = props;

	const [state, setState] = useState<IPropsState>({
		value: value ?? '',
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

	//
	const providerValuee = { state, props, setState };

	const labelSpecs: ILabelProps = {};

	if (variant === 'floating') labelSpecs.position = variant;

	return (
		<InputContext.Provider value={providerValuee}>
			<div className={cls}>
				<ControlSelector />
				{children}
				{label && <Label {...labelSpecs}>{label}</Label>}
			</div>
		</InputContext.Provider>
	);
}
