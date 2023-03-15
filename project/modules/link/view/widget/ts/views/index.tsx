import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { Result } from './result';

export /*bundle*/
	function View() {
	return (
		<div className="view">
			<Header componentName="Link" />
			<div className="component-info">
				<h3>Import:</h3>
				<CopyableImplementation>{`import { Link } from '@bgroup/ui/link';`}</CopyableImplementation>
			</div>
			<div className='component-implementation'>
				<div className="component-info">
					<h3>Implementation:</h3>
					<CopyableImplementation>{`<Link href='/' >This is a link to home</Link>`}</CopyableImplementation>
					<div className='component-detail'>
						<h4>Additional Information:</h4>
						<div>
							<p>If you want to execute a function before the redirection you can pass an <code>onClick</code> which will be executed before the redirection.</p>
						</div>
					</div>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Result />
					
				</div>
			</div>
		</div>
	);
}
