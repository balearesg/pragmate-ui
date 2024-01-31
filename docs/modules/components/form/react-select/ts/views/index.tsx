import React from 'react';
import { Code } from 'pragmate-ui/code';
import { implementation } from './implementation';
import { SelectComponent } from './select';
import { ReactSelect } from 'pragmate-ui/form/react-select';
import { Modal } from 'pragmate-ui/modal';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const options2 = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
	{ value: 'chocolate2', label: 'Chocolate2' },
	{ value: 'strawberry2', label: 'Strawberry2' },
	{ value: 'vanilla2', label: 'Vanilla2' },
	{ value: 'chocolate3', label: 'Chocolate3' },
	{ value: 'strawberry3', label: 'Strawberry3' },
	{ value: 'vanilla3', label: 'Vanilla3' },
];
export /*bundle*/
function View({ widget }) {
	return (
		<div className='view'>
			<h1 className='view__h1'>Wrapper de implementación para el React Select</h1>

			<p>
				La libreria React Select trabaja inyectando css de forma dinamica en el head del documento, por lo que
				para que funcione en modulos de Beyond, es necesario hacer un wrapper que inyecte el css en el shadow
				dom del componente.
			</p>
			<p>
				Este Wrapper gestiona la inyección correcta de estilos en el web component y posibilita el uso de la
				libreria react select, para cualquier documentación adicional, por favor revisar
				<a href='https://react-select.com/home'> la documentación oficial de la libreria</a>
			</p>

			<h3>Parametros</h3>

			<p>
				El componente recibe los mismos parametros que el componente original, con la diferencia de que el
				parámetro <b>widget</b> es obligatorio y debe ser el web component en donde se utilizará el componente.
				El objeto Widget esta disponible como propiedad en los controladores de widgets de beyondJS y es
				recibido como parametro en el componente principal del mismo.
			</p>
			<div className='component-info'>
				<h3>Import: </h3>
				<Code>{`import { ReactSelect } from 'pragmate-ui/form/react-select'`}</Code>
			</div>
			<div className='component-implementation'>
			<div className='component-info'>
					<h3>Implementation: </h3>
					<Code>{implementation}</Code>
				</div>

				<div className='component-result'>
					<h3>Result:</h3>
					<ReactSelect widget={widget} options={options} />
				</div>
			</div>
			<div className='component-result-top'>
				<h3>Result:</h3>
				<ReactSelect widget={widget} options={options2} />
			</div>
		</div>
	);
}
