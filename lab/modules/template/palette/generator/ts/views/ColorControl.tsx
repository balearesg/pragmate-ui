import React from 'react';
import { Input } from 'pragmate-ui/form';
import type { StoreManager } from '../store';

interface IProps {
	store: StoreManager;
	label: string;
	name: string;
	value: string;
}
export function ColorControl({ store, label, name, value }: IProps) {
	const [currentValue, setCurrentValue] = React.useState(value);

	const onSelectColor = event => {
		store.setColor(name, event.target.value);
		setCurrentValue(event.target.value);
	};

	return (
		<label htmlFor='primary'>
			{label}
			<Input type='text' onChange={onSelectColor} value={currentValue} />
			<input type='color' value={currentValue} onChange={onSelectColor} name='primary' />
		</label>
	);
}
