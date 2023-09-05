import * as React from 'react';
import { Alert } from 'pragmate-ui/alert';
import { Button, ButtonGroup } from 'pragmate-ui/components';

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
		<section className="example">
			<div className="content">
				<ButtonGroup orientation="column" size="medium">
					{types.map((type, index) => {
						return (
							<Button key={index} onClick={() => handleSetAlerts(type)} variant="primary">
								{type}
							</Button>
						);
					})}
				</ButtonGroup>
			</div>
			{showlerts === true ? (
				<>
					<Alert icon={true} type={typeAlert}>
						<h3 className="alert__title-span">This is a {typeAlert} alert</h3>
					</Alert>
					<Alert type={typeAlert} className="side-border">
						Alert with border
					</Alert>
				</>
			) : (
				<Alert icon={true} type="success">
					<h3 className="alert__title-span">This is a success alert</h3>
				</Alert>
			)}
		</section>
	);
}
