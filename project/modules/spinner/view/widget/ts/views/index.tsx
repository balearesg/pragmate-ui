import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { BeyondSpinner } from '@bgroup/ui/spinner';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { ImplementationResult } from "@bgroup/ui/implementation-result";

export /*bundle*/
	function View() {
	return (
		<div className="view">
			<Header componentName="Spinner" />
			<div className="component-info">
				<h3>Import:</h3>
				<CopyableImplementation>{`import { BeyondSpinner } from '@bgroup/ui/spinner';`}</CopyableImplementation>
			</div>
			<div className='component-implementation'>
				<div className="component-info">
					<h3>Implementation:</h3>
					<CopyableImplementation>{`<BeyondSpinner color="#617096" className="spinner" />`}</CopyableImplementation>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<BeyondSpinner color="#617096" className="spinner" />
					<h3>Spinner primary:</h3>
					<ImplementationResult code={`<BeyondSpinner primary className="spinner" />`}>
						<BeyondSpinner primary className="spinner" />
					</ImplementationResult>
					<h3>Spinner secondary:</h3>
					<ImplementationResult code={`<BeyondSpinner secondary className="spinner" />`}>
						<BeyondSpinner secondary className="spinner" />
					</ImplementationResult>
					<h3>Spinner size defined:</h3>
					<ImplementationResult code={`<BeyondSpinner size="80px" className="spinner" />`}>
						<BeyondSpinner size="80px" className="spinner" />
					</ImplementationResult>
				</div>
			</div>
		</div>
	);
}
