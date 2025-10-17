import * as React from 'react';
import { ColorSection } from './color-section';
import { CSSDrawer } from './css-drawer';
import { useModuleContext } from '../../../context';
import { useStore } from '@beyond-js/react-18-widgets/hooks';
export function ColorSections(): JSX.Element {
	const { store } = useModuleContext();
	const { colorManager } = store;
	useStore(store.colorManager);

	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [selectedColors, setSelectedColors] = React.useState<any[]>([]);
	const [selectedCategory, setSelectedCategory] = React.useState('');
	const [copiedProperty, setCopiedProperty] = React.useState<string | null>(null);

	const copyToClipboard = (text: string): void => {
		navigator.clipboard.writeText(text);
		console.log('Color value copied:', text);
	};

	const copyCSSProperty = (property: string, value: string): void => {
		const cssProperty = `--${property}: ${value};`;
		navigator.clipboard.writeText(cssProperty);
		setCopiedProperty(property);
		setTimeout(() => setCopiedProperty(null), 2000);
		console.log('CSS Property copied:', cssProperty);
	};

	const copyAllCSSProperties = (colors: any[]): void => {
		const cssProperties = colors.map(color => `  --${color.name}: ${color.hex};`).join('\n');
		navigator.clipboard.writeText(cssProperties);
		console.log(`${colors.length} CSS properties copied to clipboard.`);
	};

	const openDrawer = (colors: any[], category: string): void => {
		setSelectedColors(colors);
		setSelectedCategory(category);
		setDrawerOpen(true);
	};

	if (!colorManager.colorSystem) {
		return null;
	}

	return (
		<div className="color-system-page__generated-section">
			<div className="color-system-page__section-header">
				<div>
					<h2 className="color-system-page__section-title">Sistema generado</h2>
					<p className="color-system-page__section-description">
						Haz clic en cualquier color para copiar su valor
					</p>
				</div>
				<span className="color-system-page__badge">
					{Object.values(colorManager.colorSystem).flat().length} colores generados
				</span>
			</div>

			<div className="color-system-page__sections">
				<ColorSection
					title="Primary"
					colors={colorManager.colorSystem.primary}
					description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Secondary"
					colors={colorManager.colorSystem.secondary}
					description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Tertiary"
					colors={colorManager.colorSystem.tertiary}
					description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Neutral"
					colors={colorManager.colorSystem.neutral}
					description="Escala 25–950 basada en tu color neutral personalizado."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Success"
					colors={colorManager.colorSystem.success}
					description="Verdes semánticos 25–950."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Warning"
					colors={colorManager.colorSystem.warning}
					description="Amarillos semánticos 25–950."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>

				<ColorSection
					title="Error"
					colors={colorManager.colorSystem.error}
					description="Rojos semánticos 25–950."
					onCopy={copyToClipboard}
					onOpenCSSDrawer={openDrawer}
				/>
			</div>

			<CSSDrawer
				open={drawerOpen}
				onOpenChange={setDrawerOpen}
				selectedColors={selectedColors}
				selectedCategory={selectedCategory}
				copiedProperty={copiedProperty}
				onCopyProperty={copyCSSProperty}
				onCopyAllProperties={copyAllCSSProperties}
			/>
		</div>
	);
}
