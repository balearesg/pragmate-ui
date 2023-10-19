import React from 'react';
import { Palette } from './palette';

export function Palettes({ store }) {
	const colors = Object.keys(store.tones);

	return (
		<>
			{colors.map((color, index) => {
				const palette = store.palettes.get(color);

				return (
					<React.Fragment key={`${color}.${index}`}>
						<Palette property={color} palette={palette} />
						{/* <CustomProperties properties={store.customProperties.get(color)} /> */}
					</React.Fragment>
				);
			})}
		</>
	);
}
