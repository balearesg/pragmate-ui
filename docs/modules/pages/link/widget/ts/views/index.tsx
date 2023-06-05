import * as React from 'react';
import { Result } from './result';
import { Code } from 'simply-ui/code';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Link</h1>
			<p className="view__p">
				El componente <span className="view__span">Link</span> Garantiza el redireccionamientos de url al dar
				click en el, permitiendo agregar al atributo href la url deseada. Si desea ejecutar una función antes de
				la redirección, puede pasar un onClick que se ejecutará antes de la redirección.
			</p>
			<div className="component-info">
				<h3>Import:</h3>
				<Code>{`import { Link } from 'simply-ui/link';`}</Code>
			</div>
			<div className="component-implementation">
				<div className="component-info">
					<h3>Implementation:</h3>
					<Code>{`<Link href='/' >This is a link to home</Link>`}</Code>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Result />
				</div>
			</div>
		</div>
	);
}
