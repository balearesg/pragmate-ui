import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';

interface Props {
	component: { path: string; name: string };
}

export function SidebarItem({ component }: Props) {
	const location = `/components/${component.path}`;

	function redirect(event) {
		event.preventDefault();
		routing.pushState(location);
	}

	return (
		<li className="sidebar-item">
			<a onClick={redirect}>{component.name}</a>
		</li>
	);
}
