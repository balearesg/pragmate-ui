import * as React from 'react';
import { IColorShade } from '../../lib/color-types';

interface IColorSwatchProps {
	color: IColorShade;
	onCopy: (text: string) => void;
}

export function ColorSwatch({ color, onCopy }: IColorSwatchProps): JSX.Element {
	return (
		<div className="color-swatch">
			<div className="color-swatch__container">
				<div
					className="color-swatch__preview"
					style={{ backgroundColor: color.hex }}
					onClick={() => onCopy(color.hex)}
				/>
				<div className="color-swatch__info">
					<div className="color-swatch__header">
						<span className="color-swatch__name">{color.name}</span>
						<button className="color-swatch__copy-button" onClick={() => onCopy(color.hex)}>
							📋
						</button>
					</div>
					<div className="color-swatch__values">
						<div className="color-swatch__value" onClick={() => onCopy(color.hex)}>
							{color.hex}
						</div>
						<div className="color-swatch__value" onClick={() => onCopy(color.rgb)}>
							{color.rgb}
						</div>
						<div className="color-swatch__value" onClick={() => onCopy(color.hsl)}>
							{color.hsl}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
