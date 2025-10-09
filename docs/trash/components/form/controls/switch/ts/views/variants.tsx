import React from 'react';
import { Switch } from 'pragmate-ui/form';

export function VariantsSwitch() {
	const [switchStates, setSwitchStates] = React.useState({
		primary: false,
		secondary: false,
		tertiary: false,
		success: false,
		warning: false,
		danger: false,
		info: false,
	});
	const switches = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info'];

	function handleChange(event) {
		const { name } = event.target;
		setSwitchStates(prevState => ({
			...prevState,
			[name]: !prevState[name],
		}));
	}

	const output = switches.map(item => (
		<div key={item} className='content__switch'>
			<strong>type = {`" ${item} "`}</strong>
			<Switch key={item} variant={item} checked={switchStates[item]} onChange={handleChange} name={item} />
		</div>
	));

	return <div className='content'>{output}</div>;
}
