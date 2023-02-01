import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';

import { implementation } from './implementation';

export /*bundle*/
function View() {
	return (
		
			<div className="view">
				<Header componentName="Form" />
				<div className="component-info">
					<h3>Import: </h3>
					<CopyableImplementation>{`import {BeyondForm} from '@bgroup/ui/form';`}</CopyableImplementation>
				</div>
				<div className='component-implementation'>
					<div className="component-info">
						<h3>Implementation:</h3>
						<CopyableImplementation>{implementation}</CopyableImplementation>
					</div>
				</div>
			</div>
	
	);
}
