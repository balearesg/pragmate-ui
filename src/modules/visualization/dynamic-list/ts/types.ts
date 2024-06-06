import { HTMLAttributes } from 'react';

export interface IDynamicContext {
	addItem?: () => void;
	removeItem?: (index: number) => void;
	values?: any[];
	setValue: (index, value) => void;
	setValues?: (values: any[]) => void;
	setItems?: (items: any[]) => void;
	draggable?: boolean;
	name: string;
	getDefaultValue?: () => any;
	registerRef: (index: number, ref: any) => void;
	refs: React.MutableRefObject<any[]>;
	orderValues?: string[];
	Item?: React.ComponentType<any>;
}

export interface IPUIEvent {
	target: {
		name: string;
		value: any;
	};
	currentTarget: {
		name: string;
		value: any;
	};
}
export interface DynamicListProps {
	children?: React.ReactNode;
	className?: string;
	onChange?: (data: IPUIEvent) => void;
	value?: any[];
	name: string;
	defaultValue?: any;
	draggable?: boolean;
	specs?: Record<string, any>;
	Item: React.ComponentType<any>; // Type check for React component
}

export type DynamicItemProps = {
	value?: any;
	className?: string;
};

export interface IPuiFormProps {
	className?: string;
	onChange?: (data: IPUIEvent) => void;
	value?: any;
	name: string;
	defaultValue?: any;
}

export interface IPuiProps extends HTMLAttributes<HTMLElement> {}
