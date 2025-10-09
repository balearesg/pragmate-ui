import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { View } from './views';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Manager } from './manager';

export /*bundle*/
class Controller extends PageReactWidgetController {
	get Widget() {
		return View;
	}

	#store;

	createStore(): IWidgetStore {
		this.#store = new Manager();
		return this.#store;
	}

	hide() {
		this.#store.hide();
	}
}
