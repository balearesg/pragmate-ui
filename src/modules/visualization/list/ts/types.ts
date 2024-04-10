import React, { ReactElement, ReactNode } from 'react';
export /*bundle */ type ListProps<T> = {
	items: T[];
	className?: string;
	index?: string;
	specs;
	control: React.ElementType<{ data: T }>;
	childrenPosition?: 'top' | 'bottom';
	container?: keyof JSX.IntrinsicElements;
	children?: ReactNode;
	as?: keyof JSX.IntrinsicElements;
	dragabble: boolean;
	onReorder: (items: T[]) => void;
};
