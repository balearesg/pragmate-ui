import * as React from 'react';

import { Link, Button } from 'pragmate-ui/components';
export /*bundle*/
function View() {
	return (
		<div className='view view-introduction'>
			<h1 className='view__h1'>Introducction</h1>
			<p className='view__p'>
				¡Bienvenido a la documentación de <strong className='view__strong'>PragmateUI</strong>!
			</p>
			<p className='view__p'>
				PragmateUI es una libreria que provee componentes reutilizables, rapidos y dinamicos para su pagina o
				aplicacion web ! Creado principalmente con{' '}
				<strong className='view__strong strong-beyondjs'>
					{' '}
					<Link href='https://beyondjs.com'>BeyondJS</Link>
				</strong>
				.
			</p>

			<h3 className='view__h3'>
				¿Por que <strong className='view__strong'>Pragmate UI</strong>?
			</h3>
			<p className='view__p'>
				La idea principal es por su uso tan sencillo y adaptable de componentes reutilizables que permite que
				usted o su equipo ahorre tiempo mediante el uso de componentes preconstruidos, modulares y atractivos.
				Tambien una de las buenas cosas es por la gran variedad de componentes que ofrece{' '}
				<strong className='view__strong'>Pragmate UI</strong>, desde botones hasta drag and drolls. Esta
				libreria incluye una variedad de componentes que se pueden importar e implementar fácilmente en su
				proyecto.
			</p>

			<h3 className='view__h3'>Configuracion previa</h3>
			<p className='view__p'>
				¡No hay! trabajar con <strong className='view__strong'>Pragmate UI</strong> es sencillo y no requiere de
				una implementacion previa en su proyecto. Solamente hacer bien la instalacion de la libreria.
			</p>
			<h3 className='view__h3'>Apoyanos</h3>
			<p className='view__p'>
				Si desea apoyarnos colaborando con nosotros en la creacion de componentes o mejora de alguno de estos le
				dejamos nuestro <strong className='view__strong'>Github</strong>.👇
			</p>
			<Button variant='primary' icon='paperPlane' className='icon--right'>
				<Link href='https://github.com/balearesg/pragmate-ui'>Github</Link>
			</Button>
			<img src='' alt='' />
		</div>
	);
}
