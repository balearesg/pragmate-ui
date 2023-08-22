import React from 'react';
import { Button } from 'pragmate-ui/components';

export function ResultsBorder(): JSX.Element {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'link'];

	const output = buttons.map(item => (
		<Button key={item} variant={item} bordered={true}>
			variant="{item}"
		</Button>
	));
	return <div className='content'>{output}</div>;
}
