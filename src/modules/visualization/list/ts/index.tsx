import React, { ReactElement, ReactNode } from 'react';
import { DraggableList } from './draggable';
import { ListProps } from './types';

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
		// @deprecated
		container = 'ul',
	} = props;
	const Container = as || container;
	const Control = control;
	const onTop = childrenPosition === 'top';
	const output: ReactNode[] = items.map((item, idx) => {
		const element = React.createElement(
			Control as React.ElementType<{ data: T; index: number; item: T; specs: Record<string, any> }>,
			{
				key: (item as any)[index] || idx,
				index: idx,
				data: item, //compatibility
				item,
				specs,
			},
		);

		return element;
	});

	if (dragabble) return <DraggableList items={output} {...props} />;
	const top = onTop && children ? children : null;
	const bottom = !onTop && children ? children : null;
	return (
		<Container className={className}>
			{top}
			{output}
			{bottom}
		</Container>
	);
}
