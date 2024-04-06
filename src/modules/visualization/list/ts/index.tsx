import React, { ReactElement, ReactNode } from 'react';

type ListProps<T> = {
	items: T[];
	className?: string;
	index?: string;
	specs;
	control: React.ElementType<{ data: T }>;
	childrenPosition?: 'top' | 'bottom';
	container?: keyof JSX.IntrinsicElements;
	children?: ReactNode;
};

export /*bundle */ function List<T>({
	items,
	className,
	children,
	index = 'id',
	specs,
	childrenPosition = 'top',
	control,
	container = 'ul',
}: ListProps<T>): ReactElement {
	const Container = container;
	const Control = control;

	try {
		const output: ReactNode[] = items.map((item, idx) => {
			const element = React.createElement(
				Control as React.ElementType<{ data: T; index: number; item: T; specs: Record<string, any> }>,
				{
					key: (item as any)[index] || idx,
					index: idx,
					data: item,
					item,
					specs,
				},
			);
			// if (container === 'ul') return <li key={idx}>{element}</li>;
			return element;
		});
		return (
			<Container className={className}>
				{childrenPosition === 'top' && children ? children : null}
				{output}
				{childrenPosition === 'bottom' && children ? children : null}
			</Container>
		);
	} catch (e) {
		console.error(`invalid items in list0`, items);
	}
}
