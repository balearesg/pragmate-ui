import * as React from 'react';
import { Alert } from 'pragmate-ui/alert';
import { Button } from 'pragmate-ui/components';
export function Example() {
	// $alert-types: 'success', 'error', 'warning', 'info';
	const [showlerts, setShowAlerts] = React.useState(false);
	const [typeAlert, setTypeAlerts] = React.useState('succes');
	const types = ['success', 'error', 'warning', 'info'];
	const handleSetAlerts = type => {
		setShowAlerts(true);
		setTypeAlerts(type);
	};
	return (
		<section className='example'>
			<div className='content'>
				{types.map((type, index) => {
					return (
						<Button key={index} onClick={() => handleSetAlerts(type)} variant='primary'>
							{type}
						</Button>
					);
				})}
			</div>
			{showlerts === true ? (
				<>
					<Alert icon={true} type={typeAlert}>
						<h3 className='alert__title-span'>This is a {typeAlert} alert</h3>
					</Alert>
					<Alert type={typeAlert} className='side-border'>
						Alert with border
					</Alert>
				</>
			) : (
				<strong>Click on one of the buttons please</strong>
			)}
		</section>
	);
}
