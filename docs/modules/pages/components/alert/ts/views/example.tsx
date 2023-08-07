import * as React from 'react';
import { Alert } from 'pragmate-ui/alert';
export function Example() {
	// $alert-types: 'success', 'error', 'warning', 'info';
	const types = ['success', 'error', 'warning', 'info'];
	return (
		<section className='example'>
			{types.map((type, index) => {
				return (
					<Alert key={index} type={type}>
						<h3 className='alert__title-span'>This is a {type} alert</h3>
					</Alert>
				);
			})}
		</section>
	);
}
