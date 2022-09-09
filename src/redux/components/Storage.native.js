import AsyncStorage from '@react-native-async-storage/async-storage';
import { AbstractStorage } from "./AbstractStorage";

export default class Storage extends AbstractStorage {
    constructor() {
        super();
        this.storage = AsyncStorage;
        this._cache = {};
    }

    getItem(key) {
        const cacheValue = this._cache[key];

        if (!cacheValue) {
            return new Promise((resolve, reject) => {
                this.storage.getItem(key, (err, result) => {
                    err && reject(err);
                    !err && resolve(result);
                })
            })
        } else {
            return cacheValue;
        }
    }

    setItem(key, value) {
        this.storage.setItem(key, value);
        this._cache[key] = value;
    }

    removeItem(key) {
        this.storage.removeItem(key);
        delete this._cache[key];
    }
}