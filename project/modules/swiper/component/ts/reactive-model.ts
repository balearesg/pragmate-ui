import {Events} from "@beyond-js/kernel/core";

export /*bundle*/
class ReactiveModel extends Events {

    _ready;
    get ready() {
        return this._ready;
    }

    _fetching;
    get fetching() {
        return this._fetching;
    }

    set fetching(value) {
        if (value === this._fetching) return;
        this._fetching = value;
        this.triggerEvent();
    }

    _fetched;
    get fetched() {
        return this._fetched;
    }

    _processing;
    get processing() {
        return this._processing;
    }

    _processed;
    get processed() {
        return this._processed;
    }

    _loaded;
    get loaded() {
        return this._loaded;
    }

    triggerEvent = (event = 'change'): void => this.trigger(event);

    /**
     * set value in a private property
     * @param property
     * @param value
     */
    _set(property, value) {
        let props = {};
        if (property && value !== 'undefined') props[property] = value; else props = property;
        let updated = false;

        for (const prop in props) {
            const key = `_${prop}`;
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
