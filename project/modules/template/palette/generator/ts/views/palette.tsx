import * as React from 'react';
import { Tooltip } from 'pragmate-ui/tooltip';

export function Palette({ property, palette }) {
	return (
		<section className='palette__container'>
			{palette.map((value, index) => {
				const color = value;

				return (
					<Tooltip key={`tone.${property}.${value}.${index}`} content={color}>
						<div className={`palette__color-container color-${value}`} style={{ backgroundColor: value }}>
							{value}
						</div>
					</Tooltip>
				);
			})}
		</section>
	);
}
