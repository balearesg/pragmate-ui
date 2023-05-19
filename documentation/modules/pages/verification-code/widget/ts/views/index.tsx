import * as React from 'react';
import { Header } from '@bgroup/ui/header';
import { CopyableImplementation } from '@bgroup/ui/copyable-implementation';
import { Result } from './results';
import { implementation } from './implementation';
import { useBinder } from '@bgroup/ui/hooks';
export /*bundle*/
	function View({ store }) {
	const [reset, setReset] = React.useState<number>(0);
	useBinder([store], () => {
		setReset(store.count)
	}, "hide")
	
	return (
		<div className="view beyond-image-view">
			<Header componentName="Verification Code" />
			<div className="component-info">
				<h3>Import: </h3>
				<CopyableImplementation>{`import { InputCode } from "@bgroup/ui/code-verification";`}</CopyableImplementation>
			</div>
			<div className='component-implementation'>
				<div className="component-info">
					<h3>Implementation: </h3>
					<CopyableImplementation>{implementation}</CopyableImplementation>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Result reset={reset} />
				</div>
			</div>
		</div>
	);
}
