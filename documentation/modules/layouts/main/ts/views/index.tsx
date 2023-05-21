import * as React from 'react';
import { Sidebar } from '../components/sidebar';
import { Toasts } from '@bgroup/ui/toast';
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<main>
			<Sidebar />
			<Toasts
				position={{
					bottom: '2rem',
					right: '2rem',
				}}
			/>
			<div className="main-content">
				<beyond-layout-children />
			</div>
		</main>
	);
}
