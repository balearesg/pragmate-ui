import * as React from 'react';
import { BeyondSwitch } from '@bgroup/ui/form';

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
			<BeyondSwitch className="checkbox" checked={isActive} onChange={handleChange}  />
		</form>
	);
}
