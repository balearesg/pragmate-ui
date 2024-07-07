import React from 'react';
import { Reorder } from 'framer-motion';
import { useDynamicListContext } from '../context';

export /* bundle */ function DraggableList({ children, className = '' }) {
	const { values, setValues } = useDynamicListContext();

	return (
		<Reorder.Group
			className={className}
			values={values}
			onReorder={values => {
				setValues(values);
			}}
		>
			{children}
		</Reorder.Group>
	);
}
