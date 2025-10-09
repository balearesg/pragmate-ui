import { ReactiveModel } from '@beyond-js/reactive/model';
import { IColorShade, IColorSystem, IColorManager } from './color-types';

export class ColorManager extends ReactiveModel<IColorManager> {
	declare primaryColor: string;
	declare secondaryColor: string;
	declare tertiaryColor: string;
	declare neutralColor: string;
	declare colorSystem: IColorSystem | null;

	constructor() {
		super({
			properties: ['primaryColor', 'secondaryColor', 'tertiaryColor', 'neutralColor', 'colorSystem'],
		});

		// Initialize with default colors
		this.set({
			primaryColor: '#3b82f6',
			secondaryColor: '#8b5cf6',
			tertiaryColor: '#14b8a6',
			neutralColor: '#6b7280',
			colorSystem: null,
		});
	}

	// Convert hex to HSL
	hexToHsl(hex: string): [number, number, number] {
		const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
		const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
		const b = Number.parseInt(hex.slice(5, 7), 16) / 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h = 0;
		let s = 0;
		const l = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
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

		return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
	}

	// Convert HSL to hex
	hslToHex(h: number, s: number, l: number): string {
		h /= 360;
		s /= 100;
		l /= 100;

		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		let r, g, b;
		if (s === 0) {
			r = g = b = l;
		} else {
			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		const toHex = (c: number) => {
			const hex = Math.round(c * 255).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		};

		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}

	// Convert hex to RGB
	hexToRgb(hex: string): string {
		const r = Number.parseInt(hex.slice(1, 3), 16);
		const g = Number.parseInt(hex.slice(3, 5), 16);
		const b = Number.parseInt(hex.slice(5, 7), 16);
		return `rgb(${r}, ${g}, ${b})`;
	}

	// Helper: reduce saturation near extremes of lightness
	adjustSaturationForLightness(s: number, lTarget: number): number {
		const distance = Math.abs(lTarget - 50); // 0..50
		const factor = 1 - (distance / 50) * 0.5; // reduce hasta 50% en los extremos
		const sAdj = Math.round(s * factor);
		return Math.max(5, Math.min(100, sAdj));
	}

	// Generate color shades (25 muy claro -> 950 muy oscuro), 500 = base brand
	generateShades(baseColor: string, name: string): IColorShade[] {
		const [h, s, l] = this.hexToHsl(baseColor);

		// Escala fija con diferencias mínimas de contraste garantizadas
		const lightnessValues: Record<string, number> = {
			'25': 97,
			'50': 94,
			'100': 87,
			'200': 76,
			'300': 65,
			'400': 55,
			'500': 45, // Base estándar
			'600': 35,
			'700': 26,
			'800': 18,
			'900': 11,
			'950': 6,
		};

		// Ajustar la escala basada en el lightness del color original
		const baseLightness = l;
		let adjustedLightness: Record<string, number>;

		if (baseLightness > 70) {
			// Color muy claro - comprimir hacia arriba manteniendo diferencias
			adjustedLightness = {
				'25': 98,
				'50': 95,
				'100': 90,
				'200': 83,
				'300': 75,
				'400': Math.max(65, baseLightness + 3),
				'500': baseLightness,
				'600': Math.max(10, baseLightness - 12),
				'700': Math.max(8, baseLightness - 22),
				'800': Math.max(6, baseLightness - 32),
				'900': Math.max(4, baseLightness - 42),
				'950': Math.max(2, baseLightness - 52),
			};
		} else if (baseLightness < 25) {
			// Color muy oscuro - comprimir hacia abajo manteniendo diferencias
			adjustedLightness = {
				'25': Math.min(96, baseLightness + 52),
				'50': Math.min(92, baseLightness + 42),
				'100': Math.min(85, baseLightness + 32),
				'200': Math.min(75, baseLightness + 22),
				'300': Math.min(65, baseLightness + 12),
				'400': Math.min(55, baseLightness + 3),
				'500': baseLightness,
				'600': Math.max(8, baseLightness - 5),
				'700': Math.max(6, baseLightness - 8),
				'800': Math.max(4, baseLightness - 11),
				'900': Math.max(2, baseLightness - 14),
				'950': Math.max(1, baseLightness - 17),
			};
		} else {
			// Color en rango normal - usar el color base como 500 y ajustar el resto
			adjustedLightness = {
				'25': 97,
				'50': 94,
				'100': 87,
				'200': 76,
				'300': Math.max(baseLightness + 10, 65),
				'400': Math.max(baseLightness + 5, 55),
				'500': baseLightness,
				'600': Math.max(baseLightness - 10, 10),
				'700': Math.max(baseLightness - 19, 8),
				'800': Math.max(baseLightness - 27, 6),
				'900': Math.max(baseLightness - 34, 4),
				'950': Math.max(baseLightness - 41, 2),
			};
		}

		// Validar y ajustar para asegurar diferencias mínimas
		const validatedLightness: Record<string, number> = {};
		const stopsArray = Object.keys(adjustedLightness).sort((a, b) => {
			const order = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
			return order.indexOf(a) - order.indexOf(b);
		});

		for (let i = 0; i < stopsArray.length; i++) {
			const currentStop = stopsArray[i];
			let currentValue = adjustedLightness[currentStop];

			// Asegurar diferencia mínima con el stop anterior
			if (i > 0) {
				const prevStop = stopsArray[i - 1];
				const prevValue = validatedLightness[prevStop];
				const minDifference = 7; // Diferencia mínima para contraste visible

				if (currentValue >= prevValue - minDifference) {
					currentValue = Math.max(1, prevValue - minDifference);
				}
			}

			validatedLightness[currentStop] = Math.round(currentValue);
		}

		const stops = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

		return stops.map(suffix => {
			const lTarget = validatedLightness[suffix];
			const sTarget = suffix === '500' ? s : this.adjustSaturationForLightness(s, lTarget);
			const hex = this.hslToHex(h, sTarget, lTarget);
			return {
				name: `${name}-${suffix}`,
				hex,
				rgb: this.hexToRgb(hex),
				hsl: `hsl(${h}, ${sTarget}%, ${lTarget}%)`,
			};
		});
	}

	// Neutrales 25..950 (negro a blanco con stops estándar)
	generateNeutrals(): IColorShade[] {
		return this.generateShades(this.neutralColor, 'neutral');
	}

	// Semánticos 25..950 con saturación adaptada por stop
	generateSemanticColors(hue: number, name: string): IColorShade[] {
		// Escala fija y progresiva de lightness con mejor contraste
		const lightnessValues: Record<string, number> = {
			'25': 97,
			'50': 94,
			'100': 87,
			'200': 76,
			'300': 65,
			'400': 54,
			'500': 43,
			'600': 33,
			'700': 24,
			'800': 16,
			'900': 9,
			'950': 4,
		};

		// Saturación progresiva optimizada
		const saturationValues: Record<string, number> = {
			'25': 25,
			'50': 30,
			'100': 40,
			'200': 50,
			'300': 60,
			'400': 70,
			'500': 75,
			'600': 80,
			'700': 85,
			'800': 88,
			'900': 92,
			'950': 95,
		};

		const stops = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

		return stops.map(suffix => {
			const l = lightnessValues[suffix];
			const s = saturationValues[suffix];
			const hex = this.hslToHex(hue, s, l);
			return {
				name: `${name}-${suffix}`,
				hex,
				rgb: this.hexToRgb(hex),
				hsl: `hsl(${hue}, ${s}%, ${l}%)`,
			};
		});
	}

	// Generate complete color system
	generateColorSystem(): void {
		const system: IColorSystem = {
			primary: this.generateShades(this.primaryColor, 'primary'),
			secondary: this.generateShades(this.secondaryColor, 'secondary'),
			tertiary: this.generateShades(this.tertiaryColor, 'tertiary'),
			neutral: this.generateNeutrals(),
			success: this.generateSemanticColors(142, 'success'), // Green
			warning: this.generateSemanticColors(45, 'warning'), // Yellow
			error: this.generateSemanticColors(0, 'error'), // Red
		};
		this.set({ colorSystem: system });
	}
}
