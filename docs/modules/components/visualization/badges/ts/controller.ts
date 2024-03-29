import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { StoreManager } from './store';
import { Page } from './views';

export /*bundle*/
class Controller extends PageReactWidgetController {
	#store: StoreManager;
	createStore() {
		this.#store = new StoreManager();
		return this.#store;
	}
	get Widget() {
		return Page;
	}

	/**
	 * this method is executed when the widget is showd
	 */
	load() {}

	/**
	 * this method is executed when the widget is hidden
	 */
	hide() {}
}
