import * as React from 'react';
import { ColorInput } from './color-input';
import { useModuleContext } from '../../../context';

export function ColorConfig(): JSX.Element {
	const { store } = useModuleContext();
	const { colorManager } = store;

	const handleColorChange = (property: string, value: string): void => {
		store.updateColor(property as keyof typeof colorManager, value);
	};

	const handleGenerateSystem = (): void => {
		store.generateColorSystem();
	};

	const handleExportCSS = (): void => {
		if (!colorManager.colorSystem) return;

		let css = ':root {\n';
		Object.entries(colorManager.colorSystem).forEach(([_, colors]) => {
			colors.forEach(color => {
				css += `  --${color.name}: ${color.hex};\n`;
			});
		});
		css += '}';

		const blob = new Blob([css], { type: 'text/css' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'color-system.css';
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="color-config">
			<div className="color-config__header">
				<h2 className="color-config__title">Configuración de colores</h2>
				<p className="color-config__description">
					Define tus colores base. El tono 500 se usa como base de marca para cada color.
				</p>
			</div>
			<div className="color-config__content">
				<div className="color-config__inputs-grid">
					<ColorInput
						id="primary"
						label="Primary Color"
						value={colorManager.primaryColor}
						onChange={value => handleColorChange('primaryColor', value)}
						placeholder="#3b82f6"
					/>
					<ColorInput
						id="secondary"
						label="Secondary Color"
						value={colorManager.secondaryColor}
						onChange={value => handleColorChange('secondaryColor', value)}
						placeholder="#8b5cf6"
					/>
					<ColorInput
						id="tertiary"
						label="Tertiary Color"
						value={colorManager.tertiaryColor}
						onChange={value => handleColorChange('tertiaryColor', value)}
						placeholder="#14b8a6"
					/>
					<ColorInput
						id="neutral"
						label="Neutral Color"
						value={colorManager.neutralColor}
						onChange={value => handleColorChange('neutralColor', value)}
						placeholder="#6b7280"
					/>
				</div>
				<div className="color-config__actions">
					<button onClick={handleGenerateSystem} className="color-config__generate-button">
						Generar sistema de color
					</button>
					{colorManager.colorSystem && (
						<button onClick={handleExportCSS} className="color-config__export-button">
							📥 Export CSS
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
