import React from 'react';
import { Link } from 'pragmate-ui/components';
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
			{/* <aside>
				<div className="menu">
					<header>
						<h5>Menu</h5>
					</header>
					<ul>
						<li>
							<Link href="/">Home </Link>
						</li>
						<li>
							<Link href="/selectors/li">Li component</Link>
						</li>
					</ul>
				</div>
			</aside> */}
			<beyond-layout-children class="main__container" />
		</div>
	);
}
