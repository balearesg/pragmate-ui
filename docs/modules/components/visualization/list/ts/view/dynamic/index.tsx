import React from 'react';
import { List } from 'pragmate-ui/list';
import * as Dynamic from 'pragmate-ui/dynamic-list';
import { DynamicItemExample } from './item';
import { Header } from './header';

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

export function DynamicListExample() {

	const onChange = data => {};
	
	return (
		<Dynamic.Provider onChange={onChange} name='test' draggable Item={DynamicItemExample}>
			<Header />
			<Dynamic.List />
		</Dynamic.Provider>
	);
}
