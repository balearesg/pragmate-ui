import * as Dynamic from 'pragmate-ui/dynamic-list';
import React from 'react';
import { Header } from './header';
import { DynamicItemExample } from './item';

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
