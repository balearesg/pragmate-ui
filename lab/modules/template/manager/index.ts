import { ReactiveModel } from '@beyond-js/reactive/model';
import { getCSSCustomPropIndex, getCSSCustomPropsObject, getCSSCustomPropsObjectFromStylesheet } from './properties';
export class TemplateManager extends ReactiveModel<TemplateManager> {
	#root;
	get root() {
		return this.#root;
	}
	constructor() {
		super();
		const properties = this.getCustomProperties();
		this.#root = properties;
	}

	getCustomProperties() {
		const stylesheetHref = new URL('./styles.css', window.location.origin).href;

		const cssPropsObject = getCSSCustomPropsObjectFromStylesheet(stylesheetHref);

		return cssPropsObject;
	}
}

export /*bundle */ const TplManager = new TemplateManager();
