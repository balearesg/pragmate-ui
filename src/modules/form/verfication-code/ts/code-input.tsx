import React, { ChangeEvent, KeyboardEvent, useState, useRef, MutableRefObject, useEffect } from 'react';
import Input from './input';
interface IProps {
	length?: number;
	onCodeFull?: (e: string) => void;
	className?: string;
	onlyNumber?: boolean;
	reset: any;
	value: string;
}
const defaultOnCodeFull: (code) => void = () => null;

/**
 * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
 * inputs, each of which is limited to one character. When the user enters a character, the component
 * updates the state with the character and focuses the next input. When the user presses backspace,
 * the component removes the last character from the state and focuses the previous input. When the
 * user enters the last character, the component calls the onCodeFull prop with the code as a string.
 * @param {props}  - props
 */

let copied = false;
export /*bundle*/ function InputCode({
	length,
	onCodeFull,
	className,
	onlyNumber,
	reset,
	value = '',
}: IProps): JSX.Element {
	type code = Array<string>;
	// Initializes the code state only once based on the value and length props.
	// This operation will be carried out when the component mounts and will not react to prop changes afterward.
	const initializeCode = (value: string, length: number): string[] => {
		const codeArray = new Array(length).fill('');
		for (let i = 0; i < length && i < value.length; i++) {
			codeArray[i] = value[i];
		}
		return codeArray;
	};

	const [code, setCode] = useState<string[]>(initializeCode(value, length));
	const [finalValue, setFinalValue] = React.useState(value ?? '');
	const [isFull, setIsFull] = useState(false);

	const [position, setPosition] = useState<number>();
	const refs: MutableRefObject<HTMLInputElement[]> = useRef<HTMLInputElement[]>(Array(length));
	const onClean = (event: KeyboardEvent<HTMLInputElement>): void => {
		const { index } = event.currentTarget.dataset;
		globalThis.setTimeout(() => {
			if (event.which === 8 || event.key?.toLowerCase() === 'backspace') {
				const current = [...code];
				current[index] = '';
				setCode(current);

				setPosition(Number(index) - 1);
			}
		}, 0);
	};

	const preventDefault = (event: ChangeEvent<HTMLInputElement>): void => {
		const { index } = event.currentTarget.dataset;
		const newValue = event.currentTarget.value;

		const current = [...code];
		if (newValue !== '') {
			setPosition(Number(index) + 1);
		}
		current[index] = event.currentTarget.value;

		setCode(value => {
			const i = [...value];
			i[index] = newValue;
			setFinalValue(i.join(''));
			return i;
		});
		const ready = current.every(item => item !== '');
		setIsFull(ready);
		/**
		 * If the code is full, and then the user presses backspace, the code will be cleared.
		 * so we call when the code is full and the user presses backspace to let the parent component know that the code is not full anymore.
		 */

		if (ready || (!ready && isFull)) onCodeFull(current.join(''));
	};

	useEffect(() => {
		if (finalValue.length === length) {
			setIsFull(true);
			onCodeFull(finalValue);
			return;
		}
		if (isFull && finalValue.length < length) {
			setIsFull(false);
			onCodeFull('');
		}
	}, [finalValue]);
	useEffect(() => {
		setTimeout(() => refs.current[position]?.focus(), 100);
	}, [position]);
	const setFocus = (): void => {
		let empty = code.findIndex(item => item === '');
		if (empty === -1) empty = code.length - 1;

		refs.current[empty]?.focus();
	};
	const cls: string = className ? `${className} code-inputs` : 'code-inputs';

	useEffect(() => {
		const onCopy = (event: ClipboardEvent): void => {
			event.stopPropagation();
			const pastedData = event.clipboardData.getData('text');
			const value = pastedData.substring(0, length).split('');

			setFinalValue(value.join(''));
			setCode(value);
		};
		refs.current[0]?.addEventListener('paste', onCopy);
		return () => {
			refs.current[0]?.removeEventListener('paste', onCopy);
		};
	}, []);
	const getItem = (_, i: number): JSX.Element => {
		const getRef = (el: HTMLInputElement): void => {
			refs.current[i] = el;
		};

		return (
			<Input
				value={code[i] ?? ''}
				index={i}
				key={i.toString()}
				ref={getRef}
				onKeyDown={onClean}
				onChange={preventDefault}
				// onFocus={setFocus}
			/>
		);
	};

	const output: Array<JSX.Element> = [...Array(length)].map(getItem);

	return <div className={cls}>{output}</div>;
}
InputCode.defaultPros = {
	onCodeFull: defaultOnCodeFull,
	length: 6,
};
