import React from 'react';
import {Button} from 'pragmate-ui/components';

export function ContentVariants() {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'link'];

	const output = buttons.map(item => (
		<Button key={item} variant={item}>
			variant="{item}"
		</Button>
	));

	return <div className="inline__list__container">{output}</div>;
}
