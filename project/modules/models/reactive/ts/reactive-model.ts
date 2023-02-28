import {Events} from "@beyond-js/kernel/core";

export /*bundle*/
class ReactiveModel extends Events {

    _ready: boolean;
    get ready(): boolean {
        return this._ready;
    }

    _fetching: boolean;
    get fetching(): boolean {
        return this._fetching;
    }

    set fetching(value: boolean) {
        if (value === this._fetching) return;
        this._fetching = value;
        this.triggerEvent();
    }

    _fetched: boolean;
    get fetched(): boolean {
        return this._fetched;
    }

    _processing: boolean;
    get processing(): boolean {
        return this._processing;
    }

    _processed: boolean;
    get processed(): boolean {
        return this._processed;
    }

    _loaded: boolean;
    get loaded(): boolean {
        return this._loaded;
    }

    triggerEvent = (event: string = 'change'): void => this.trigger(event);

    /**
     * set value in a private property
     * @param property
     * @param value
     */
    _set(property: any, value: any): void {
        let props : any = {};
        if (property && value !== 'undefined') props[property] = value; else props = property;
        let updated: boolean = false;
/* A comment. */

        for (const prop in props) {
            const key: string = `_${prop}`;
            if (!this.hasOwnProperty(key)) continue; //same value on store

            if (this[key] === props[prop]) continue;
            this[key] = props[prop];
            updated = true;
        }

        if (updated) this.triggerEvent();
    }

    getProperties() {
        const props = {};
        Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
        return props;
    }

}
