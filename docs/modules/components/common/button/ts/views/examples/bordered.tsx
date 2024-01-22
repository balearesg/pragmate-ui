import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample } from 'pragmate-ui-docs/utils';
export function BorderedExample(): JSX.Element {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info', 'link'];

	const output = buttons.map(item => (
		<Button key={item} variant={item} bordered title={item}>
			variant="{item}"
		</Button>
	));
	return (
		<div>
			<UIExample>{output}</UIExample>
		</div>
	);
}
