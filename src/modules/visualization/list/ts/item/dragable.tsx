import React from 'react';
import { IItemListProps } from '../types';
import { getAttributes } from '../html-attributes';
import { Reorder } from 'framer-motion';
import { ItemList } from './';
interface IHTMLItemProps {
	as?: keyof React.ReactHTML;
	children?: React.ReactNode;
}

export function DraggableItem<T>({ as, ...props }: IItemListProps<T>) {
	const { item, idx } = props;
	const attrs = { as };
	console.log(20, item);
	return (
		<Reorder.Item value={item} key={idx} {...attrs}>
			<ItemList {...props} item={item} idx={idx} as='span' />
		</Reorder.Item>
	);
}
