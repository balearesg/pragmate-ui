import * as React from 'react';

import { Code } from 'pragmate-ui/code';

export function CustomProperties({ properties }) {
	return (
		<section className='properties__container'>
			<Code language='css'>{properties}</Code>
		</section>
	);
}
