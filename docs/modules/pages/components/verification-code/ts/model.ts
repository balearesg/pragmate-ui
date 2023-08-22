import { ReactiveModel } from "@beyond-js/reactive/model";

export class Model extends ReactiveModel<any> {
    #count: number = 0;
    get count() {
        return this.#count
    }
    hide = () => {
        this.#count = this.#count + 1
        this.triggerEvent("hide")
    }

}