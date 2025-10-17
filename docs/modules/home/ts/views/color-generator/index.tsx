import * as React from 'react';
import { useModuleContext } from '../../context';
import { ColorConfig } from './components/color-config';
import { ColorSections } from './components/color-sections';

export function ColorGenerator(): JSX.Element {
	const { store } = useModuleContext();

	React.useEffect(() => {
		store.generateColorSystem();
	}, []);

	return (
		<div className="color-system-page">
			<div className="color-system-page__container">
				<div className="color-system-page__header">
					<h1 className="color-system-page__title">System Color Generator</h1>
					<p className="color-system-page__description">
						Genera un sistema completo con tonos 25–950 a partir de tus colores primario, secundario,
						terciario y neutral.
					</p>
				</div>
				<ColorConfig />
				<ColorSections />
			</div>
		</div>
	);
}
