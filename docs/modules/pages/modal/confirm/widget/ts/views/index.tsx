import * as React from 'react';
import { Results } from './results';
import { implementation } from './implementation';
import { Code } from 'simply-ui/code';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Modal Confirm</h1>
			<p className="view__p">
				El componente <span className="view__span">Modal Confirm</span> se utiliza para mostrar un mensaje de
				confirmación a los usuarios antes de realizar acciones críticas en una aplicación web, como eliminar o
				modificar datos. El componente contiene dos botones: Aceptar y Cerrar. Al hacer clic en el botón
				Aceptar, el usuario confirma la acción, mientras que al hacer clic en el botón Cerrar, simplemente
				cierra el modal sin realizar ninguna acción.
			</p>
			<div className="component-info">
				<h3>Import:</h3>
				<Code>{`import { ConfirmModal } from 'simply-ui/modal';`}</Code>
			</div>
			<div className="component-implementation">
				<div className="component-info">
					<h3>Implementation: </h3>
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
