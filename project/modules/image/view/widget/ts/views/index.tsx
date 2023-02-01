import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { Results } from './results';
import { implementation } from './implementation';

export /*bundle*/
	function View() {
	return (
		<div className="view beyond-image-view">
			<Header componentName="Image" />
			<div className="component-info">
				<h3>Import: </h3>
				<CopyableImplementation>{`import { BeyondImage } from '@bgroup/ui/image';`}</CopyableImplementation>
			</div>
			<div className='component-implementation'>
				<div className="component-info">
					<h3>Implementation: </h3>
					<CopyableImplementation>{implementation}</CopyableImplementation>
					<div className='component-detail'>
						<h4>Additional Information:</h4>
						<div>
							<p>This component detects when the image is loading or when the image could not be loaded in both cases a different html class is set, for the loading case <code>beyond-element-image-preload</code>&nbsp;
								and for the error case<code>beyond-element-image-error</code></p>
						</div>
					</div>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Results />
				</div>
			</div>
		</div>
	);
}
