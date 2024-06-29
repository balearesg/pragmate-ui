import { ReactHTML } from 'react';
import { IPUIProps } from 'pragmate-ui/base';

export interface IListProps<T> extends Omit<IPUIProps<IListProps<T>>, 'variant'> {
	items: T[];
	index?: string; // Key name to use for element keys
	specs?: Record<string, any>;
	control?: string | React.ElementType<{ data: T; index: number; item: T; specs: Record<string, any> }>;
	childrenPosition?: 'top' | 'bottom';
	container?: keyof JSX.IntrinsicElements;
	as?: keyof ReactHTML;
	draggable?: boolean;
	onReorder?: (items: T[]) => void;
}

export interface IItemListProps<T> {
	specs: Record<string, any>;
	index: string;
	as?: keyof ReactHTML;
	item: T;
	data?: T; //compatibility
	idx: number;
	control?: string | React.ElementType<{ data: T; index: number; item: T; specs: Record<string, any> }>;
}
