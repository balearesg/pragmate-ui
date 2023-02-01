import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { BeyondEmpty } from '@bgroup/ui/empty';

import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { implementation } from './implementation';

export /*bundle*/
function View() {
	return (
		
			<div className="view">
				<Header componentName="Empty" />
				<div className="component-info">
					<h3>Import: </h3>
					<CopyableImplementation>{`import { BeyondEmpty } from '@bgroup/ui/empty';`}</CopyableImplementation>
				</div>
				<div className='component-implementation'>
				<div className="component-info">
					<h3>Implementation: </h3>
					<CopyableImplementation>{implementation}</CopyableImplementation>
				</div>

				<div className="component-result">
					<h3>Result:</h3>
					<BeyondEmpty icon="info" text="No records to display" />
				</div>
				</div>
			
			</div>
	
	);
}
