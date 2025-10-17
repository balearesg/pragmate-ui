import * as React from 'react';
import { IColorShade } from '../../../lib/color-types';

interface IColorSwatchProps {
	color: IColorShade;
	onCopy: (text: string) => void;
	colors: IColorShade[];
}

export function ColorSwatch({ color, onCopy, colors }: IColorSwatchProps): JSX.Element {
	const [variant, number] = color.name.split('-');
	const cls = parseInt(number) > 400 ? 'upper-color' : 'lower-color';
	const textColor = parseInt(number) > 400 ? colors[0].hex : colors[colors.length - 1].hex;

	return (
		<div className="color-swatch">
			<div className="color-swatch__container">
				<div
					className="color-swatch__preview"
					style={{ backgroundColor: color.hex }}
					onClick={() => onCopy(color.hex)}
				>
					<div className="number-color" style={{ color: textColor }}>
						{number}
					</div>
				</div>
			</div>
		</div>
	);
}
