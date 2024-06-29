import React from 'react';
import { IItemListProps } from '../definitions';
import { getAttributes } from '../html-attributes';
import { HTMLItem } from './html';

export function ItemList<T>({ specs, index, item, control, idx, as = 'li' }: IItemListProps<T>) {
	// Determine the appropriate component to use based on whether 'control' is a string or a component.
	control = control ? control : as || 'li';

	const Control = typeof control === 'string' ? HTMLItem : control;

	const elementProps = {
		key: (item as any)[index] || idx,
		index: idx,
		data: item,
		item,
		specs,
		as: typeof control === 'string' ? control : undefined, // Pass 'as' only if control is a string
	};

	const element = React.createElement(Control as React.ElementType<any>, elementProps);

	return element;
}
