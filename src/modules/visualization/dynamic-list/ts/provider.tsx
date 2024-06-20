import React, { useRef } from 'react';
import { DynamicListProps } from './types';
import { DynamicListContext } from './context';

export /*bundle */ function Provider({
	name,
	onChange,
	draggable,
	children,
	value,
	Item,
	specs,
	className,
}: DynamicListProps) {
	if (value && !Array.isArray(value)) {
		console.warn('Warning: value prop must be an array or undefined. Received', value);
	}

	const getDefaultValue = () => '';
	if (!value?.length) value = [getDefaultValue()];

	const [items, setItems] = React.useState([...value]);
	const [isDraggable, setIsDraggable] = React.useState(draggable);
	const refs = useRef([]);
	React.useEffect(() => {
		setItems(value);
	}, [value.length]);

	const providerData = {
		addItem: () => {
			const newValue = [...items, getDefaultValue()];
			setItems(newValue);
		},
		draggable: isDraggable,
		refs,
		specs: specs ?? {},
		toggleDraggable: () => setIsDraggable(!isDraggable),
		removeItem: index => {
			const newItems = items.filter((_, i) => i !== index);
			setItems(newItems);
			const target = { name, value: newItems };
			onChange?.({ target, currentTarget: target });

			return newItems;
		},
		name,
		setItems,
		values: items,
		registerRef: (index, ref) => {
			refs.current[index] = ref;
		},
		setValue: (index, value) => {
			const newItems = [...items];
			newItems[index] = value;
			setItems(newItems);
		},
		setValues: value => {
			setItems(value);
			const target = { name, value };
			onChange?.({ target, currentTarget: target });
		},
		getDefaultValue,
		items: items,
		Item,
	};

	return (
		<DynamicListContext.Provider value={providerData}>
			<div className={className}>{children}</div>
		</DynamicListContext.Provider>
	);
}
