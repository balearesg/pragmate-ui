import { Reorder } from 'framer-motion';
import React from 'react';
import { IItemListProps } from '../definitions';
import { ItemList } from './';
interface IHTMLItemProps {
	as?: keyof React.ReactHTML;
	children?: React.ReactNode;
}

export function DraggableItem<T>({ as, ...props }: IItemListProps<T>) {
	const { item, idx } = props;
	const attrs = { as };

	return (
		<Reorder.Item value={item} key={idx} {...attrs}>
			<ItemList {...props} item={item} idx={idx} as='span' />
		</Reorder.Item>
	);
}
