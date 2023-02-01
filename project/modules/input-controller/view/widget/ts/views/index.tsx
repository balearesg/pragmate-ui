import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { component, template } from './implementations';
import { Results } from './results';

export /*bundle*/
	function Widget() {
	return (

		<div className="view input-controller-view">
			<Header componentName="Input Controller" />
			<div className="component-info">
				<h3>Import: </h3>
				<CopyableImplementation>{`import {InputController} from '@bgroup/ui/input-controller';`}</CopyableImplementation>
			</div>
			<div className="component-info">
				<h3>Implementation</h3>
				<CopyableImplementation>{component}</CopyableImplementation>
			</div>
			<div className='component-implementation'>
				<div className="component-info">
					<h3>template.json</h3>
					<CopyableImplementation>{template}</CopyableImplementation>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Results />
				</div>
			</div>
		</div>

	);
}
