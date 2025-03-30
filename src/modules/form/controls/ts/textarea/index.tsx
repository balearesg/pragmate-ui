import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import { IProps, IState } from './types';
import { TextareaError } from './error';
import { TextareaCounter } from './counter';

let previousHeight = 0;
export /*bundle*/ function Textarea(props: IProps): JSX.Element {
	const input = props.ref ?? useRef();
	const { counter, errorMessage, autoresize = true, value = '' } = props;
	const [state, setState] = useState<IState>({ value, errorMessage });

	React.useEffect(() => {
		const textarea = input.current;
		textarea.style.height = 'auto';
		// Set new height based on scrollHeight
		textarea.style.height = `${textarea.scrollHeight}px`;
	}, [value]);
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);

		// const value = cleanExtraNewlines(event.target.value);
		const value = event.target.value;
		setState({
			...state,
			_hasError: false,
			value,
		});
	};

	let properties: IProps = { ...props };
	let cls: string = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
	cls += props.disabled ? ' disabled' : '';
	cls += props.hasError ? ' error' : '';
	['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(
		prop => delete properties[prop]
	);
	const variants = {
		unstyled: 'pui-textarea--unstyled',
		floating: 'pui-textarea--floating',
	};

	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	let clsLabel = '';
	if (props.required) cls += ' is-required';

	return (
		<div className={cls}>
			<textarea
				ref={input}
				{...properties}
				name={props.name}
				onChange={handleChange}
				value={value}
				placeholder={props.placeholder ?? ' '}
			/>
			{props.children}
			<TextareaError state={state} hasError={props.hasError} value={value} errorMessage={props.errorMessage} />
			{props.label && (
				<label className={clsLabel} htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<TextareaCounter length={input?.current?.value.length} maxlength={props.maxLength} counter={counter} />
		</div>
	);
}
