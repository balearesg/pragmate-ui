import React from 'react';

import { TplManager } from 'pragmate-ui/template/manager';

export function SurfacesPanel() {
	const surfaces = Object.keys(TplManager.root).filter(name => name.includes('surface'));
	console.log(0.1, surfaces);
	return (
		<div>
			<h3>Surfaces</h3>
			<section className='surface__container'>
				{surfaces.map((surface, i) => {
					return (
						<div
							key={`surface.${surface}.${i}`}
							className='surface__item'
							style={{
								backgroundColor: TplManager.root[surface],
							}}
						>
							{surface}
						</div>
					);
				})}
			</section>
		</div>
	);
}
