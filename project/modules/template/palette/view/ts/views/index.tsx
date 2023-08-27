import * as React from 'react';
import { Palette } from './palette';

export /*bundle*/
function View({ store }) {
	const output = store.properties.map((tone, i) => {
		console.log(1, tone);
		return <Palette key={`${tone}.${i}`} property={tone} store={store} />;
	});

	return (
		<div>
			<h2>Template tones</h2>
			<main className='page__container'>{output}</main>
		</div>
	);
}
