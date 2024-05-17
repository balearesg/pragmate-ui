import React from 'react';
import { DynamicListContext, useDynamicListContext } from '../context';
import { Button } from 'pragmate-ui/components';
export /*bundle */ function Header({ children }) {
	const [value, setValue] = React.useState();
	const { addItem } = useDynamicListContext();
	const providerData = {};
	return (
		<header className='pui-dynamic-list__header'>
			<Button variant='primary' onClick={addItem}>
				Add
			</Button>
			{children}
		</header>
	);
}
