import { Input } from 'pragmate-ui/form';
import React from 'react';

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
