import * as React from 'react';
import { Code } from 'pragmate-ui/code';
import { implementationsButton } from '../implementation';
export /*bundle*/
function View() {
	return (
		<div className="view view-installation">
			<h1 className="view__h1">Instalacion</h1>
			<h3 className="view__h3">
				instalacion de <strong className="view__strong">PragmateUI</strong>
			</h3>
			<p className="view__p">
				Como ya se dijo la instalacion de <strong className="view__strong">PragmateUI</strong> es sencilla,
				debemos ejecutar el siguiente comando en el paquete que deseemos usarlo:
			</p>
			<Code>{`npm i @pragmate/ui `}</Code>
			<p className="view__p">
				Una vez hecho ya podremos beneficiarnos y contar con todas las herramientas que ofrece{' '}
				<strong className="view__strong">PragmateUI</strong>. Implemente y trabaje de manera sencilla con todos
				las herramientas y uselos segun su necesidad.
			</p>
			<Code>{implementationsButton}</Code>
		</div>
	);
}
