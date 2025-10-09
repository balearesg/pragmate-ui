import React from 'react';
import {Switch} from 'pragmate-ui/form';

export function Results() {
	const [isActive, setIsActive] = React.useState(false);

	function handleChange() {
		setIsActive(!isActive);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// Logic...
	}

	return (
		<form onSubmit={handleSubmit} className="results-form">
			<Switch variant="primary" checked={isActive} onChange={handleChange} />
		</form>
	);
}
