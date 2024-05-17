import React from 'react';
import * as Dynamic from 'pragmate-ui/dynamic-list';
import { Input } from 'pragmate-ui/form';

export function DynamicItemExample({ item, index, value, setValue, identifier }) {
	const [currentValue, setCurrentValue] = React.useState('');
	const onChange = event => {
		setValue(event.currentTarget.value);
	};

	return (
		<div className='pui-item'>
			<Input value={currentValue ?? ''} onChange={onChange} />
		</div>
	);
}
