import { ReactiveModel } from '@beyond-js/reactive/model';
import tinycolor from 'tinycolor2';

export class ColorScaleGenerator extends ReactiveModel {
	constructor(private baseColor: string) {
		super();
	}

	// Genera una gama de colores desde claro a oscuro
	generateColorScale(): string[] {
		let colorScale: string[] = [];
		const base = tinycolor(this.baseColor);

		for (let i = 50; i <= 950; i += 100) {
			// Ajusta la luminosidad para generar tonos más claros o más oscuros
			const lightness = this.calculateLightness(i);
			const color = base.clone().set('hsl.l', lightness).toHexString();
			colorScale.push(color);
		}

		this.trigger('change', colorScale);
		return colorScale;
	}

	private calculateLightness(scale: number): number {
		// Asumiendo que 50 es el más claro y 950 es el más oscuro
		// Puedes ajustar la fórmula según tus necesidades
		return (1 - (scale - 50) / 900) * 0.9 + 0.1; // Rango de luminosidad de 10% a 100%
	}

	static generate(color) {
		return new ColorScaleGenerator(color).generateColorScale();
	}
}

type RGBColor = {
	r: number; // Rango: 0-255
	g: number; // Rango: 0-255
	b: number; // Rango: 0-255
};
type HSLColor = {
	h: number; // Hue, en grados: 0-360
	s: number; // Saturación, en porcentaje: 0-100
	l: number; // Luminosidad, en porcentaje: 0-100
};

export class ScaleGenerator extends ReactiveModel<ScaleGenerator> {
	hexToRgb(hex: string): RGBColor {
		let r: number = 0,
			g: number = 0,
			b: number = 0;

		// Si es un color hexadecimal de tres caracteres
		if (hex.length === 4) {
			r = parseInt(hex[1] + hex[1], 16);
			g = parseInt(hex[2] + hex[2], 16);
			b = parseInt(hex[3] + hex[3], 16);
		}
		// Si es un color hexadecimal de seis caracteres
		else if (hex.length === 7) {
			r = parseInt(hex.slice(1, 3), 16);
			g = parseInt(hex.slice(3, 5), 16);
			b = parseInt(hex.slice(5, 7), 16);
		}

		return { r, g, b };
	}

	rgbToHsl(rgb: RGBColor): HSLColor {
		let r = rgb.r / 255;
		let g = rgb.g / 255;
		let b = rgb.b / 255;

		let max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		let h,
			s,
			l = (max + min) / 2;

		if (max === min) {
			h = s = 0; // Achromatic
		} else {
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}

		return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
	}

	hexToHSL(hex: string): HSLColor {
		const rgb = this.hexToRgb(hex);
		return this.rgbToHsl(rgb);
	}

	private hslToHex(h: number, s: number, l: number): string {
		l /= 100;
		const a = (s * Math.min(l, 1 - l)) / 100;
		const f = n => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, '0'); // convert to Hex and prefix "0" if needed
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	}

	// Genera una escala de colores basada en el color HEX proporcionado
	public generateColorScale(hexColor: string, scaleSteps: number = 10): string[] {
		const hsl = this.hexToHSL(hexColor);
		let scale: string[] = [];

		for (let i = 0; i <= scaleSteps; i++) {
			const lightness = (i / scaleSteps) * 100; // De 0 a 100%

			const colorHex = this.hslToHex(hsl.h, hsl.s, lightness);
			scale.push(colorHex);
		}

		this.trigger('change', scale);
		return scale;
	}
	static generate(color) {
		const colorScaleGenerator = new ScaleGenerator();
		const colorScale = colorScaleGenerator.generateColorScale(color);

		return colorScale;
	}
}

// Uso:
