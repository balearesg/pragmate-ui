import React from 'react';

export const ColorPalette = () => {
	const baseHue = 120; // Hue for the base color (e.g., green)
	const finalHue = 240; // Hue for the final color (e.g., blue)
	const numColors = 5; // Number of intermediate colors

	const generateColors = () => {
		const colors: string[] = [];
		const hueStep = (finalHue - baseHue) / (numColors + 1);

		for (let i = 1; i <= numColors; i++) {
			const hue = baseHue + i * hueStep;
			const color = `hsl(${hue}, 100%, 50%)`; // 100% saturation, 50% lightness
			colors.push(color);
		}

		return colors;
	};

	const colors = generateColors();

	return (
		<div>
			{colors.map((color, index) => (
				<div key={index} style={{ backgroundColor: color, padding: '20px' }}>
					{color}
				</div>
			))}
		</div>
	);
};
