import { ReactiveModel } from '@beyond-js/reactive/model';

export class Manager extends ReactiveModel<Manager> {
	#count: number = 0;
	get count() {
		return this.#count;
	}
	hide = () => {
		this.#count = this.#count + 1;
		this.triggerEvent('hide');
	};
}
