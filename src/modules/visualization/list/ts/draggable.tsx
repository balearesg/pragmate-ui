import React, { ReactNode } from 'react';
import { Reorder } from 'framer-motion';
import { IListProps } from './types';

export function DraggableList<T>({ specs, control, index, ...props }: IListProps<T>) {
	const [items, setItems] = React.useState(props.items);

	const onReorder = (items: T[]) => {
		setItems(items);

		if (props.onReorder) props.onReorder(items);
	};

	const output: ReactNode[] = items.map((item, idx) => (
		<Reorder.Item value={item} key={`${item as unknown as string}`}>
			{item as unknown as ReactNode}
		</Reorder.Item>
	));

	return (
		<Reorder.Group values={items} onReorder={onReorder}>
			{output}
		</Reorder.Group>
	);
}
