import { ReactiveModel } from '@beyond-js/reactive/model';
import { ColorManager } from './lib/color-manager';

export interface IStore {
	colorManager: ColorManager;
}

export class StoreManager extends ReactiveModel<IStore> {
	declare colorManager: ColorManager;

	constructor() {
		super({
			properties: ['colorManager'],
		});

		// Initialize ColorManager
		this.colorManager = new ColorManager();
	}

	// Method to update color properties
	updateColor(property: keyof IStore['colorManager'], value: string): void {
		this.colorManager.set({ [property]: value });
		this.set({ colorManager: this.colorManager });
	}

	// Method to generate color system
	generateColorSystem(): void {
		this.colorManager.generateColorSystem();
	}
}
