import React from 'react';
import {Sidebar} from '../components/sidebar';
import {Navbar} from 'pragmate-ui-docs/navbar';
import {Footer} from 'pragmate-ui-docs/footer';

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
			<beyond-layout-children class="main__container" />
		</div>
	);
}
