import React from 'react';
import { useDynamicListContext } from '../context';
import { Button } from 'pragmate-ui/components';
export /*bundle */ function Header({ children }) {
	const { addItem } = useDynamicListContext();

	return (
		<header className='pui-dynamic-list__header'>
			<Button variant='primary' onClick={addItem}>
				Add
			</Button>
			{children}
		</header>
	);
}
