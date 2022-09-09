import { AbstractStorage } from "./AbstractStorage";

export default class Storage extends AbstractStorage {
    constructor() {
        super();
        console.log(window.localStorage);
        this.storage = window.localStorage;
    }

    getItem(key) {
        return this.storage.getItem(key);
    }

    setItem(key, value) {
        this.storage.setItem(key, value);
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }
}