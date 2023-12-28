import React from 'react';
import {ProgressBar} from 'pragmate-ui/progress-bar';

export function Result() {
	const [currentValue, setCurrentValue] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (currentValue === 100) {
				setCurrentValue(0);
			} else {
				setCurrentValue(currentValue + 1);
			}
		}, 100);

		return () => clearInterval(interval);
	}, [currentValue]);
	return (
		<div className="content-result">
			<ProgressBar currentValue={currentValue} maxValue={100} variant="primary" />
		</div>
	);
}
