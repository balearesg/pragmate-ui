import React from 'react';
import { Alert } from 'pragmate-ui/alert';
import { Button, ButtonGroup } from 'pragmate-ui/components';
import { v4 as uuid } from 'uuid';
import { Badge } from 'pragmate-ui/badge';

export function Example() {
	const [typeAlert, setTypeAlerts] = React.useState('success');
	const types = ['success', 'error', 'warning', 'info'];
	const handleSetAlerts = type => {
		setTypeAlerts(type);
	};

	const output = types.map(type => (
		<Button key={uuid()} onClick={() => handleSetAlerts(type)} variant="primary">
			{type.charAt(0).toUpperCase() + type.slice(1)}
		</Button>
	));

	return (
		<section className="example">
			<div className="content">
				<ButtonGroup orientation="column" size="medium">
					{output}
				</ButtonGroup>
			</div>
			<>
				<Alert icon={true} type={typeAlert}>
					<h3 className="alert__title-span">Esto es una alerta comun de tipo: {typeAlert}</h3>
				</Alert>
				<Alert type={typeAlert} className="side-border">
					Y esto es una alerta ``{typeAlert}` pero usando la clase `side-border`
				</Alert>
			</>
		</section>
	);
}
