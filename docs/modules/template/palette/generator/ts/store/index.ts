import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { TplManager, hslToHex } from 'pragmate-ui/template/manager';
import { generatePalette } from './calculator';
import { ReactiveModel } from '@beyond-js/reactive/model';

type TColorInput = string | [number, number, number]; // Puede ser un string hexadecimal o un array RGB
type TRGB = [number, number, number];

export class StoreManager extends ReactiveModel<StoreManager> implements IWidgetStore {
	#values: TColorInput | TRGB[];
	get values() {
		return this.#values;
	}
	#properties = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'error'];
	get properties() {
		return this.#properties;
	}
	#colors = new Map();
	get palettes() {
		return this.#colors;
	}

	#customProperties = new Map();
	get customProperties() {
		return this.#customProperties;
	}
	#tones = {
		primary: '#660000',
		secondary: '#006600',
		tertiary: '#000066',
		error: '#660000',
		success: '#006600',
		info: '#000055',
		warning: '#505000',
	};
	get tones() {
		return this.#tones;
	}

	constructor() {
		super();
		const tones = Object.keys(this.tones);
		tones.forEach(tone => this.generateColorData(tone, this.tones[tone]));
	}

	setColor(property, color) {
		this.#tones[property] = color;
		this.triggerEvent();
	}
	generatePalettes() {
		const palettes = Object.keys(this.#tones);
		palettes.forEach(palette => this.generateColorData(palette, this.#tones[palette]));
		this.triggerEvent();
	}
	generateColorData(propertyTones, color) {
		const palette = generatePalette(color);
		this.#customProperties.set(propertyTones, this.getCustomProperties(propertyTones, palette));
		this.#colors.set(propertyTones, palette);
	}
	getCustomProperties(property, palette) {
		const values = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];

		const output = palette
			.map((value, index) => {
				return `--${property}-${values[index]}: ${value};`;
			})
			.join('\n');

		return `--${property}: ${this.#tones[property]};\n${output}`;
	}
}
