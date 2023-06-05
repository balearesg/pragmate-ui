import * as React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<div className="layout__container">
			<aside>
				<h3>Menu</h3>
			</aside>
			<beyond-layout-children />
		</div>
	);
}
