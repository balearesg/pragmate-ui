import React from 'react';
import { Button } from 'pragmate-ui/components';

export function BorderedExample(): JSX.Element {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'link'];

	const output = buttons.map(item => (
		<Button key={item} variant={item} bordered title={item}>
			variant="{item}"
		</Button>
	));
	return <div className='content'>{output}</div>;
}
