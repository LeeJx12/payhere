
/**
 * window.localStorage 사용 (Web)
 */
export default class Storage {
    constructor() {
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