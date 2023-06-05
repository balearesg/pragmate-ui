import * as React from 'react';
import { Code } from 'simply-ui/code';
import { Results } from './results';
import { implementation } from './implementation';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Checkbox</h1>
			<p className="view__p">
				El componente <span className="view__span">Checkbox</span> permite a los usuarios seleccionar una o
				varias opciones de una lista mediante la marca de casillas.
			</p>
			<div className="component-info">
				<h3>Import: </h3>
				<Code>{`import { Checkbox } from 'simply-ui/form';`}</Code>
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
