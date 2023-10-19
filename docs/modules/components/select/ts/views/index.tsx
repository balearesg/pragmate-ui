import React from 'react';
import {Code} from 'pragmate-ui/code';
import {implementation} from './implementation';
import {SelectComponent} from './select';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Select</h1>
			<p className="view__p">
				El componente <span className="view__span">Select</span>
				es un elemento de formulario que permite al usuario seleccionar una opción de una lista desplegable.
				Este componente es útil cuando el usuario necesita elegir una opción de un conjunto limitado de valores.
				El componente select suele estar acompañado de una etiqueta que describe el propósito de la selección y
				puede incluir opciones preseleccionadas para hacer la selección más fácil para el usuario.
			</p>
			<div className="component-info">
				<h3>Import: </h3>
				<Code>{`import { Select } from 'pragmate-ui/select'`}</Code>
			</div>
			<div className="component-implementation">
				<div className="component-info">
					<h3>Implementation: </h3>
					<Code>{implementation}</Code>
				</div>

				<div className="component-result">
					<h3>Result:</h3>
					<SelectComponent />
				</div>
			</div>
		</div>
	);
}
