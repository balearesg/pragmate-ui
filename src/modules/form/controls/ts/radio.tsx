import { IPUIProps } from 'pragmate-ui/base';
import React, { MutableRefObject, useRef } from 'react';
import { IFormProps } from './types';

export /*bundle*/ function Radio(props: IPUIProps<HTMLInputElement>): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();

	const onClick = (event): void => {
		event.stopPropagation();
		input.current.checked = true;
		if (!!props.onChange) props.onChange(event);
	};

	const properties: IFormProps = { ...props };
	delete properties.onChange;

	const cls: string = `pragmate-element-radio ${properties.className ? properties.className : ''}`;

	return (
		<label className={cls} onClick={onClick}>
			<input ref={input} {...properties} type='radio' onChange={onClick} />
			{properties.label && <span>{properties.label}</span>}
		</label>
	);
}
