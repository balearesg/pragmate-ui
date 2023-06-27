
import { ScrollUp } from '../handlers/scroll-up';
import { PipeLine } from "./pipeline";

export class Router {
	#isDefault;
	get isDefault(): boolean {
		return this.#pathname === "/";
	}

	#pathname;
	get pathname() {
		return this.#pathname;
	}

	#data;
	get data(): any {
		return this.#data;
	}

	#pipeline: PipeLine;
	constructor() {
		this.#pipeline = new PipeLine([ScrollUp]);
	}

	load = async (pathname): Promise<{ pathname: any }> => {
		return await this.#pipeline.validate(pathname);
	};
}
