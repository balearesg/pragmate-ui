import React from 'react';
import type {IProps} from './type';
import {MutableRefObject, InputHTMLAttributes, ReactNode} from 'react';

interface IInputContextValue {
	state: {
		value?: string | number | readonly string[];
		errorMessage: string;
		lengthMessage: string;
		emptyMessage: string;
		_hasError?: boolean;
		type: InputHTMLAttributes<HTMLInputElement>['type'];
	};
	props: IProps;
	setState: React.Dispatch<
		React.SetStateAction<{
			value: string;
			errorMessage: string;
			lengthMessage: string;
			emptyMessage: string;
			type: string;
		}>
	>;
	input: MutableRefObject<HTMLInputElement>;
}

export const InputContext = React.createContext({} as IInputContextValue);
export const useInputContext = () => React.useContext(InputContext);
