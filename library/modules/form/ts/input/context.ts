import React from 'react';
import type { IProps } from './types';
import { MutableRefObject, InputHTMLAttributes, ReactNode } from 'react';

interface IInputContextValue {
	state: {
		value?: string | number | readonly string[];
		errorMessage: string;
		lengthMessage: string;
		emptyMessage: string;
		_hasError?: boolean;
		type: InputHTMLAttributes<HTMLInputElement>['type'];
	};
	id?: string;
	value: string;
	name?: string;
	props: IProps;

	setState: any;
	setValue: (value) => void;
}

export const InputContext = React.createContext({} as IInputContextValue);
export const useInputContext = () => React.useContext(InputContext);
