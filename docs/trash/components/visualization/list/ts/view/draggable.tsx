import React from 'react';
import { List } from 'pragmate-ui/list';

const cities: string[] = [
	'New York',
	'Los Angeles',
	'Chicago',
	'Houston',
	'Phoenix',
	'Philadelphia',
	'San Antonio',
	'San Diego',
	'Dallas',
	'San Jose',
];

export function DraggableList() {
	const [items, setItems] = React.useState(cities);
	return <List items={items} draggable={true} onReorder={setItems} />;
}
