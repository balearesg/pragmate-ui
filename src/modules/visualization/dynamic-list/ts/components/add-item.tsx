import React from 'react';

import { Button } from 'pragmate-ui/components';
import { useDynamicListContext } from '../context';
export /*bundle */ function AddDynamicItem({ children }) {
	const [value, setValue] = React.useState();
	const { addItem } = useDynamicListContext();
	const providerData = {};
	return (
		<Button variant='primary' onClick={addItem}>
			Add
		</Button>
	);
}
