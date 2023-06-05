import * as React from 'react';
import { CopyableImplementation } from 'simply-ui/copyable-implementation';
import { Code } from 'simply-ui/code';

import { Results } from './results';
import { implementation } from './implementation';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Radio</h1>
			<p className="view__p">
				El componente <span className="view__span">Radio</span> es un elemento de interfaz de usuario que
				permite seleccionar una opción de una lista mediante el uso de botones de opción.
			</p>
			<div className="component-info">
				<h3>Import: </h3>
				<Code>{`import { Radio } from 'simply-ui/form';`}</Code>
			</div>
			<div className="component-implementation">
				<div className="component-info">
					<h3>Implementation:</h3>
					<Code>{implementation}</Code>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Results />
				</div>
			</div>
		</div>
	);
}
