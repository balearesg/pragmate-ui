import * as React from 'react';
import { IField } from './types';

interface IContextValue {
	fields: IField[];
	onChange: (fields: IField[]) => void;
	onAdd: () => void;
	onRemove: (index: number) => void;
	onUpdate: (index: number, name: string, value: string) => void;
}

export const ModuleContext: React.Context<Partial<IContextValue>> = React.createContext({});
export const /*bundle*/ useDynamicFieldContext = () => React.useContext(ModuleContext);
