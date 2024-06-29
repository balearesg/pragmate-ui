import React, { ReactElement, ReactNode } from 'react';
import { DraggableList } from './draggable';
import { IListProps } from './definitions';
import { ItemList } from './item';
import { DraggableItem } from './item/dragable';

export /*bundle */ function List<T>({ items, ...props }: IListProps<T>): ReactElement {
	const {
		className,
		children,
		index = 'id',
		specs,
		draggable,
		childrenPosition = 'top',
		control,
		as = 'ul',
		// @deprecated
		container = 'ul',
	} = props;
	const Container = as || container;

	const onTop = childrenPosition === 'top';
	const ItemControl = draggable ? DraggableItem : ItemList;

	if (draggable) return <DraggableList items={items} {...props} />;

	if (!Array.isArray(items)) {
		console.warn(
			'Invalid "items" prop: Expected an array. Please review the component usage and ensure the "items" prop is correctly passed as an array.',
		);
		return null;
	}

	const output: ReactNode[] = items.map((item, idx) => (
		<ItemControl index={index} key={idx} specs={specs} control={control} item={item} idx={idx} />
	));

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
