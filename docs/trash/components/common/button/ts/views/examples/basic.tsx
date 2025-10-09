import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample } from 'pragmate-ui-docs/utils';
export function BasicExample() {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info', 'link'];

	const output = buttons.map(item => (
		<Button key={item} variant={item}>
			variant="{item}"
		</Button>
	));

	return <UIExample className='inline__list__container'>{output}</UIExample>;
}
