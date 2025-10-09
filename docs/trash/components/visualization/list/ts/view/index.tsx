import React from 'react';
import { Code } from 'pragmate-ui/code';
import { Example } from './example';
import Content from './content.mdx';
import { Reorder } from 'framer-motion';
import { DynamicListExample } from './dynamic';
import { DraggableList } from './draggable';
import { Input } from 'pragmate-ui/form';

export /*bundle*/ function View() {
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

	const [items, setItems] = React.useState(cities);
	return (
		<div className='view'>
			<Content />
			<hr />
			<DynamicListExample />
		</div>
	);
}
