// models/figma.ts
import { ReactiveModel } from '@beyond-js/reactive/model';
const TOKEN = '';
const ANGEL_TOKEN = '';
interface IColor {
	name: string;
	rgba: string;
	hex: string;
}

interface IPaletteGroup {
	name: string;
	colors: IColor[];
}

interface IFigmaState {
	colors: IColor[];
	loading: boolean;
	error: string | null;
}

export class Figma extends ReactiveModel<Figma> {
	private readonly token: string;
	private readonly base = 'https://api.figma.com/v1';

	declare colors: IColor[];
	declare paletteGroups: IPaletteGroup[];
	declare loading: boolean;
	declare error: string | null;

	constructor(token: string) {
		super({ properties: ['colors', 'paletteGroups', 'loading', 'error'] });
		this.token = token;
		this.colors = [];
		this.paletteGroups = [];
		this.loading = false;
		this.error = null;
	}

	async getColors(file: string) {
		this.loading = true;
		this.error = null;
		try {
			const data = await this.loadFile(file);
			const page = data.document.children.find((p: any) => p.name === 'Design System / Variables');
			if (!page) throw new Error('Página "Design System / Variables" no encontrada');

			const paletteGroups: Array<{ name: string; colors: IColor[] }> = [];

			const extract = (nodes: any[], parentName?: string) => {
				for (const node of nodes) {
					// Buscar paletas padre (ej: "primary Palette Cards", "secondary Palette Cards")
					if (node.name?.includes('Palette Cards')) {
						const paletteName = node.name.replace(' Palette Cards', '').toLowerCase();
						const paletteColors: IColor[] = [];

						// Extraer colores de esta paleta
						const extractColors = (colorNodes: any[]) => {
							for (const colorNode of colorNodes) {
								if (colorNode.name?.includes('Color Card')) {
									const content = colorNode.children?.find((c: any) => c.name === 'Content');
									const name = content?.children?.find(
										(c: any) => c.name === 'Color Name'
									)?.characters;
									const wrap = colorNode.children?.find((c: any) => c.name === 'Color wrap');
									const colorFillNode = wrap?.children?.find((c: any) => c.name === 'Color');
									const fill = colorFillNode?.fills?.[0];

									if (fill?.type === 'SOLID') {
										const { r, g, b } = fill.color;
										paletteColors.push({
											name,
											rgba: `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(
												b * 255
											)},${fill.opacity ?? 1})`,
											hex: this.toHex(r, g, b),
										});
									}
								}
								if (colorNode.children) extractColors(colorNode.children);
							}
						};

						extractColors(node.children || []);

						if (paletteColors.length > 0) {
							paletteGroups.push({
								name: paletteName,
								colors: paletteColors,
							});
						}
					}

					if (node.children) extract(node.children);
				}
			};

			extract(page.children);

			// Guardar paletas agrupadas
			this.paletteGroups = paletteGroups;

			// Convertir a formato plano para mantener compatibilidad con la interfaz actual
			const allColors: IColor[] = [];
			paletteGroups.forEach(palette => {
				palette.colors.forEach(color => {
					allColors.push({
						...color,
						name: `${palette.name}-${color.name}`,
					});
				});
			});

			this.colors = allColors;
		} catch (e: any) {
			this.error = e.message;
			this.colors = [];
		} finally {
			this.loading = false;
		}
	}

	async getPaletteGroups(file: string): Promise<IPaletteGroup[]> {
		await this.getColors(file);
		return this.paletteGroups;
	}

	async loadStyles(file: string) {
		this.loading = true;
		this.error = null;
		try {
			const { meta } = await this.get(`/files/${file}/styles`);
			const styles = meta.styles.filter((s: any) => s.style_type === 'FILL');
			if (!styles.length) {
				this.colors = [];
				return;
			}
			const ids = styles.map((s: any) => s.node_id).join(',');
			const { nodes } = await this.get(`/files/${file}/nodes?ids=${ids}`);
			this.colors = styles
				.map((s: any) => {
					const paint = nodes[s.node_id]?.document?.fills?.[0];
					if (!paint || paint.type !== 'SOLID') return null;
					const { r, g, b, a } = paint.color;
					return {
						name: s.name,
						rgba: `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${a ?? 1})`,
						hex: this.toHex(r, g, b),
					};
				})
				.filter(Boolean) as IColor[];
		} catch (e: any) {
			this.error = e.message;
			this.colors = [];
		} finally {
			this.loading = false;
		}
	}

	async loadFile(file: string) {
		return this.get(`/files/${file}`);
	}

	async getVariables(file: string) {
		return this.get(`/files/${file}/variables`);
	}

	async loadNode(file: string, ids: string[]) {
		const query = ids.join(',');
		return this.get(`/files/${file}/nodes?ids=${query}`);
	}

	private async get<T = any>(url: string): Promise<T> {
		const res = await fetch(`${this.base}${url}`, {
			headers: { 'X-Figma-Token': this.token },
		});
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		return res.json();
	}

	private toHex(r: number, g: number, b: number): string {
		const hex = (v: number) =>
			Math.round(v * 255)
				.toString(16)
				.padStart(2, '0');
		return `#${hex(r)}${hex(g)}${hex(b)}`;
	}
}

export { IColor, IPaletteGroup };
export const figmaManager = new Figma(ANGEL_TOKEN);
globalThis.figmaManager = figmaManager;
