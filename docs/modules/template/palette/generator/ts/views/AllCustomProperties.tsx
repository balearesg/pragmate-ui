import * as React from 'react';

import { Code } from 'pragmate-ui/code';

export function AllCustomProperties({ store }) {
	let output = '';
	[...store.customProperties.entries()].forEach(([key, value]) => {
		output += `\n//${key}\n\n ${value}`;
	});
	return (
		<section className='properties__container'>
			<Code language='css'>{output}</Code>
		</section>
	);
}
