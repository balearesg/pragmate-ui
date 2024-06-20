import React from 'react';
import { Button } from 'pragmate-ui/components';
import { useDynamicListContext } from '../context';

export /*bundle */ function AddDynamicItem() {
	const { addItem } = useDynamicListContext();
	return (
		<Button variant='primary' onClick={addItem}>
			Add
		</Button>
	);
}
