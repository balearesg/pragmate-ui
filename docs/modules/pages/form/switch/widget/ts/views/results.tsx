import * as React from 'react';
import { Switch } from 'simply-ui/form';

export function Results() {
	const [isActive, setIsActive] = React.useState(true);

	function handleChange() {
		setIsActive(!isActive);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// Logic...
	}

	return (
		<form onSubmit={handleSubmit} className="results-form">
			<Switch className="checkbox" checked={isActive} onChange={handleChange} />
		</form>
	);
}
