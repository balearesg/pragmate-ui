import * as React from 'react';
import { IColorShade } from '../../lib/color-types';

interface ICSSDrawerProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	selectedColors: IColorShade[];
	selectedCategory: string;
	copiedProperty: string | null;
	onCopyProperty: (property: string, value: string) => void;
	onCopyAllProperties: (colors: IColorShade[]) => void;
}

export function CSSDrawer({
	open,
	onOpenChange,
	selectedColors,
	selectedCategory,
	copiedProperty,
	onCopyProperty,
	onCopyAllProperties,
}: ICSSDrawerProps): JSX.Element {
	if (!open) return null;

	return (
		<div className="css-drawer__overlay">
			<div className="css-drawer__container">
				<div className="css-drawer__header">
					<div className="css-drawer__title-area">
						<span className="css-drawer__icon">&lt;/&gt;</span>
						<h2 className="css-drawer__title">CSS Custom Properties - {selectedCategory}</h2>
					</div>
					<p className="css-drawer__description">
						Copia propiedades individuales o todas las de esta categoría.
					</p>
				</div>
				<div className="css-drawer__content">
					<div className="css-drawer__toolbar">
						<h3 className="css-drawer__count">{selectedColors.length} propiedades disponibles</h3>
						<button
							onClick={() => onCopyAllProperties(selectedColors)}
							className="css-drawer__copy-all-button"
						>
							📋 Copy All
						</button>
					</div>
					<div className="css-drawer__properties">
						{selectedColors.map((color, index) => (
							<div key={index} className="css-drawer__property">
								<div className="css-drawer__property-info">
									<div
										className="css-drawer__property-color"
										style={{ backgroundColor: color.hex }}
									/>
									<div className="css-drawer__property-code">
										<span className="css-drawer__property-name">--</span>
										<span className="css-drawer__property-value">{color.name}</span>
										<span className="css-drawer__property-semicolon">: </span>
										<span className="css-drawer__property-value">{color.hex}</span>
										<span className="css-drawer__property-semicolon">;</span>
									</div>
								</div>
								<button
									onClick={() => onCopyProperty(color.name, color.hex)}
									className="css-drawer__property-copy-button"
									aria-label={`Copiar --${color.name}`}
								>
									{copiedProperty === color.name ? '✅' : '📋'}
								</button>
							</div>
						))}
					</div>
					<div className="css-drawer__example">
						<h4 className="css-drawer__example-title">Ejemplo de uso:</h4>
						<code className="css-drawer__example-code">
							{`/* En tu CSS */\n:root {\n${selectedColors
								.slice(0, 3)
								.map(color => `  --${color.name}: ${color.hex};`)
								.join(
									'\n'
								)}\n  /* ... más propiedades */\n}\n\n/* Uso */\n.my-element {\n  background-color: var(--${
								selectedColors[0]?.name || 'primary-50'
							});\n  color: var(--${
								selectedColors[selectedColors.length - 1]?.name || 'primary-950'
							});\n}`}
						</code>
					</div>
				</div>
				<div className="css-drawer__footer">
					<button onClick={() => onOpenChange(false)} className="css-drawer__close-button">
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
}
