import React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<div className='layout__container'>
			<beyond-layout-children class='main__container' />
		</div>
	);
}
