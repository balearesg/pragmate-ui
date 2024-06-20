import * as React from 'react';
import { Button } from 'pragmate-ui/components';
export function ButtonsList({ bordered }) {
	const buttons = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'link'];

	return (
		<div className='content'>
			{buttons.map(item => (
				<Button key={item} variant={item}>
					variant="{item}"
				</Button>
			))}
		</div>
	);
}
