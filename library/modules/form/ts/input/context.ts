import React from 'react';
import type { IInputState, IProps } from './type';
import { MutableRefObject } from 'react';

export interface IInputContextValue {
	props: IProps;
	state: IInputState;
	setState: React.Dispatch<React.SetStateAction<IInputState>>;
	inputRef: MutableRefObject<HTMLInputElement>;
}

export const InputContext = React.createContext({} as IInputContextValue);
export const useInputContext = () => React.useContext(InputContext);
