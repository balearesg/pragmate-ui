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

	type linesCalculated = {
		maxCharsPerLine: number;
		lines: number;
	};
	// function calculateLines(textarea: HTMLTextAreaElement): { maxCharsPerLine: number; lines: number } {
	// 	if (!textarea) {
	// 		throw new Error('Input element not found.');
	// 	}

	// 	const computedStyle = globalThis.getComputedStyle(textarea);
	// 	const elementWidth = textarea.clientWidth;
	// 	const fontSize = computedStyle.fontSize;
	// 	const fontFamily = computedStyle.fontFamily;
	// 	const canvas = document.createElement('canvas');
	// 	const context = canvas.getContext('2d');

	// 	if (!context) {
	// 		throw new Error('Unable to get canvas rendering context.');
	// 	}

	// 	context.font = `${fontSize} ${fontFamily}`;
	// 	const averageCharWidth = context.measureText('M').width;
	// 	const maxCharsPerLine = Math.floor(elementWidth / averageCharWidth);

	// 	// Contar líneas por saltos de línea explícitos
	// 	const linesArray = textarea.value.split('\n');

	// 	// Contar la cantidad total de líneas (incluyendo vacías)
	// 	let calculatedLines = linesArray.length;

	// 	// Ajustar líneas considerando el ajuste por ancho de línea
	// 	linesArray.forEach(line => {
	// 		calculatedLines += Math.max(0, Math.ceil(line.length / maxCharsPerLine) - 1);
	// 	});

	// 	// Asegurar un mínimo de 2 líneas
	// 	calculatedLines = Math.max(2, calculatedLines);

	// 	// Ajustar el tamaño del textarea dinámicamente
	// 	textarea.rows = calculatedLines;

	// 	return { maxCharsPerLine, lines: calculatedLines };
	// }

	// const checkSize = () => {
	// 	if (!autoresize) return;
	// 	const textarea = input.current;

	// 	const { offsetHeight } = textarea;
	// 	const { lines } = calculateLines(textarea);
	// 	const lineHeight = parseFloat(globalThis.getComputedStyle(textarea).lineHeight);
	// 	const height = lineHeight * (lines + 1); // Example: Minimum 2 lines height

	// 	textarea.style.height = (height === 1 ? height + 1 : height) + 'px';
	// 	previousHeight = offsetHeight;
	// };
	// function cleanExtraNewlines(text) {
	// 	return text.replace(/\n+$/, '\n');
	// }
	// /**
	//  * If the textarea is created with a value, the height needs to be checked
	//  */
	// React.useEffect(checkSize, [value]);
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
