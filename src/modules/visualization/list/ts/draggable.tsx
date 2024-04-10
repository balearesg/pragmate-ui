import React from 'react';
import { Reorder } from 'framer-motion';
/**
 *
 */
export function DraggableList(props) {
	const [items, setItems] = React.useState(props.items);

	const onReorder = items => {
		console.log(30, items);
		setItems(items);
		if (props.onReorder) props.onReorder(items);
	};

	const attrs = { as: props.as };
	return (
		<Reorder.Group {...attrs} values={items} onReorder={onReorder}>
			{items.map((item, idx) => {
				return (
					<Reorder.Item key={idx} value={item}>
						{item}
					</Reorder.Item>
				);
			})}
		</Reorder.Group>
	);
}
