import React from 'react';
import { ChangeEvent, useRef, MutableRefObject } from 'react';
import { listClassName } from './class-list';
import type { IInputState, IProps } from './type';
import { IInputContextValue, InputContext } from './context';
import { RenderingProps } from './rendering-props';

export /*bundle*/
function Input(props: IProps): JSX.Element {
	const [state, setState] = React.useState<IInputState>({ type: props.type, value: props.value });
	const inputRef: MutableRefObject<HTMLInputElement> = useRef(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const cantAddMore = props.maxLength && event.target.value.length > props.maxLength;
		const cantDeleteMore = props.minLength && event.target.value.length < props.minLength;
		if (cantAddMore || cantDeleteMore) return;

		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
	};

	let properties: IProps = { ...props };
	let cls: string = props.className ? `${props.className} pui-element-input` : 'pui-element-input';
	cls += props.icon || props.loading || props.password || props.required ? ' has-icon' : '';
	cls += props.disabled ? ' disabled' : '';
	cls += !!props.error ? ' error' : '';
	cls += props.floating ? ' floating--label' : '';

	listClassName.forEach(prop => delete properties[prop]);

	const contextValue: IInputContextValue = { props, inputRef, state, setState };
	return (
		<InputContext.Provider value={contextValue}>
			<div className={cls}>
				<input
					ref={inputRef}
					{...properties}
					name={props.name}
					onChange={handleChange}
					placeholder={props.placeholder || ' '}
					value={props.value || ''}
					id={props.id || props.name}
				/>
				<RenderingProps />
				{props.children}
			</div>
		</InputContext.Provider>
	);
}
