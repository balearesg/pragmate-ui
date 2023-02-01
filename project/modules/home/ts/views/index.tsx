import * as React from 'react';
import { Header } from '@bgroup/ui/header';

export /*bundle*/
function Page(): JSX.Element {
	return (
		<div className="view">
			<Header componentName="Getting started" />
			<div className="information">
				<div className="title">
					<h3>
						BEYOND <span className="ui">UI</span> | Useful and reusable components
					</h3>
				</div>
				<p>Beyond UI is a collection of reusable components here you can see what they are and how to import and implement them. </p>
				<p>It provides a set of useful and highly customizable components to be used in your projects! </p>
			</div>
		</div>
	);
}
