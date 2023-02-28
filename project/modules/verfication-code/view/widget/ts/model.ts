import { ReactiveModel } from "@bgroup/ui/reactive-model";

export class Model extends ReactiveModel {
    #count: number = 0;
    get count() {
        return this.#count
    }
    hide = () => {
        this.#count = this.#count + 1
        this.triggerEvent("hide")
    }

}