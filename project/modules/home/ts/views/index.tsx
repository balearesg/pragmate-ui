import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation'
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
				<div className='to-install'>
					<h4>To Install</h4>
					<CopyableImplementation>{`npm i @bgroup/ui`}</CopyableImplementation>
				</div>

			</div>
		</div>
	);
}
