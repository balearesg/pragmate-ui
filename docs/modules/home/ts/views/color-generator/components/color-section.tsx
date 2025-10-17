import * as React from 'react';
import { IColorShade } from '../../../lib/color-types';
import { ColorSwatch } from './color-swatch';

interface IColorSectionProps {
	title: string;
	colors: IColorShade[];
	description: string;
	onCopy: (text: string) => void;
	onOpenCSSDrawer: (colors: IColorShade[], category: string) => void;
}

export function ColorSection({ title, colors, description, onCopy, onOpenCSSDrawer }: IColorSectionProps): JSX.Element {
	return (
		<div className="color-section">
			<div className="color-section__header">
				<div className="color-section__title-area">
					<div className="color-section__info">
						<span className="color-section__icon">🎨</span>
						<div className="color-section__text">
							<h3 className="color-section__title">{title}</h3>
							<p className="color-section__description">{description}</p>
						</div>
					</div>
					<button onClick={() => onOpenCSSDrawer(colors, title)} className="color-section__css-button">
						&lt;/&gt; CSS Properties
					</button>
				</div>
			</div>
			<div className="color-section__content">
				<div className="color-section__grid">
					{colors.map((color, index) => (
						<ColorSwatch key={index} color={color} onCopy={onCopy} colors={colors} />
					))}
				</div>
			</div>
		</div>
	);
}
