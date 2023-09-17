import * as React from 'react';
import { ButtonGroup } from 'pragmate-ui/components';
import { ProgressBar } from 'pragmate-ui/progress-bar';
import { Button } from 'pragmate-ui/components';
export function ProgressBarVariants() {
	const variants = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'info'];

	const [currentValue, setCurrentValue] = React.useState(0);
	const [variantProgressBar, setVariantProgressBar] = React.useState('primary');

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (currentValue === 100) {
				setCurrentValue(0);
			} else {
				setCurrentValue(currentValue + 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [currentValue]);

	const handleVariantProgressBar = event => {
		const { dataset } = event.currentTarget;
		setVariantProgressBar(dataset.variant);
	};
	const buttons = variants.map(item => {
		return (
			<Button variant="primary" key={item} data-variant={item} onClick={handleVariantProgressBar}>
				{item}
			</Button>
		);
	});
	return (
		<div className="content-variants">
			<ButtonGroup direction="row">{buttons}</ButtonGroup>
			<ProgressBar currentValue={currentValue} maxValue={100} variant={variantProgressBar} />
		</div>
	);
}
