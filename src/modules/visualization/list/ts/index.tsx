import React, { ReactElement, ReactNode } from 'react';
import { Reorder } from 'framer-motion';
import { DraggableList } from './draggable';

export /*bundle */ function List<T>({ items, ...props }: ListProps<T>): ReactElement {
	const {
		className,
		children,
		index = 'id',
		specs,
		dragabble,
		childrenPosition = 'top',
		control,
		as = 'ul',
		container = 'ul',
	} = props;
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

			return element;
		});

		if (dragabble) return <DraggableList items={output} {...props} />;
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
