export { ColorManager } from './color-manager';
export type { IColorShade, IColorSystem, IColorManager } from './color-types';

interface FigmaClient {
	token: string;
}

export async function getColorTokens(figma: FigmaClient, fileId: string) {
	const stylesRes = await fetch(`https://api.figma.com/v1/files/${fileId}/styles`, {
		headers: {
			'X-Figma-Token': figma.token,
		},
	});

	const { meta } = await stylesRes.json();

	const fillStyles = meta.styles.filter((style: any) => style.style_type === 'FILL');

	const ids = fillStyles.map((s: any) => s.node_id).join(',');

	const nodesRes = await fetch(`https://api.figma.com/v1/files/${fileId}/nodes?ids=${ids}`, {
		headers: {
			'X-Figma-Token': figma.token,
		},
	});

	const { nodes } = await nodesRes.json();

	return fillStyles
		.map((style: any) => {
			const node = nodes[style.node_id];
			const paint = node.document.fills[0];

			if (paint.type !== 'SOLID') return null;

			const { r, g, b, a } = paint.color;
			return {
				name: style.name,
				rgba: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a ?? 1})`,
				hex: rgbToHex(r, g, b),
			};
		})
		.filter(Boolean);
}

function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (v: number) =>
		Math.round(v * 255)
			.toString(16)
			.padStart(2, '0');
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
