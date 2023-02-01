import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';

import { Results } from './results';
import { implementation, implementationBorder, implementationCancel, implementationIcon, implementationSecondary, implementationSpinner } from './implementation';
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { ResultsSpinner } from './result-sipnner';
import { ResultIcon } from './result-icon';
import { ResultsSecondary } from './button-secondary';
import { ResultsBorder } from './button-border';
import { ResultsCancel } from './button-cancel';
export /*bundle*/
	function View() {
	return (
		
			<div className="view">
				<Header componentName="Checkbox" />
				<div className="component-info">
					<h3>Import: </h3>
					<CopyableImplementation>{`import { BeyondButton } from "@bgroup/ui/form";`}</CopyableImplementation>
				</div>
				<div className='component-implementation'>
					<div className="component-info">
						<h3>Implementation:</h3>
						<CopyableImplementation>{implementation}</CopyableImplementation>
					</div>
					<div className="component-result">
						<h3>Result button primary:</h3>
						<Results />
						<h3>Case button secondary:</h3>
						<ImplementationResult code={implementationSecondary}>
							<ResultsSecondary />
						</ImplementationResult>
						<h3>Case button border:</h3>
						<ImplementationResult code={implementationBorder}>
							<ResultsBorder />
						</ImplementationResult>
						<h3>Case button cancel:</h3>
						<ImplementationResult code={implementationCancel}>
							<ResultsCancel />
						</ImplementationResult>
						<h3>Case button loading:</h3>
						<ImplementationResult code={implementationSpinner}>
							<ResultsSpinner />
						</ImplementationResult>
						<h3>Case button with icon:</h3>
						<ImplementationResult code={implementationIcon}>
							<ResultIcon />
						</ImplementationResult>
					</div>
				</div>

			</div>
		
	);
}
