import React from 'react';
import { Palettes } from './palettes';
import { SurfacesPanel } from './SurfacesPanel';

export /*bundle*/
function View({ store }) {
	const [view, setView] = React.useState('palettes');

	const Views = {
		palettes: Palettes,
		surfaces: SurfacesPanel,
	};

	const onClick = event => {
		event.preventDefault();
		setView(event.currentTarget.dataset.view);
	};
	const Control = Views[view];

	return (
		<main className='page__container'>
			<pui-template-view-widget />
		</main>
	);
}
