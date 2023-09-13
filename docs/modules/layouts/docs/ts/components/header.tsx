import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';

export function MenuHeader({ icon, title }) {
	return (
		<header>
			<h3 className='aside__h3-title'>
				<Icon icon={icon} /> {title}
			</h3>
		</header>
	);
}
