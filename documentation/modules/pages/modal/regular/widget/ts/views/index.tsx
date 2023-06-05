import * as React from 'react';
import { CopyableImplementation } from 'simply-ui/copyable-implementation';
import { Results } from './results';
import { implementation } from './implementation';
import { Code } from 'simply-ui/code';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Modal Regular</h1>
			<p className="view__p">
				El componente <span className="view__span">Modal Regular</span> se utiliza para mostrar información,
				alertas o contenido adicional en una aplicación web o de escritorio. El componente modal es un elemento
				de la interfaz de usuario que aparece encima de otros elementos y bloquea la interacción con el
				contenido subyacente hasta que se cierre. Funcionalidades Muestra contenido de manera modal en la
				aplicación. Puede contener texto, imágenes, botones, enlaces y otros elementos. Puede ser personalizado
				con estilos y temas propios. Se puede manejar de forma dinámica, mostrando u ocultando según sea
				necesario.
			</p>
			<div className="component-info">
				<h3>Import:</h3>
				<Code>{`import { Modal } from 'simply-ui/modal';`}</Code>
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
