import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    constructor() {
        this._initializing = this.initialize();
    }

    initialize() {
        return new Promise(resolve => {
            AsyncStorage.getAllKeys().then((...keys) => {
                const _keys = keys[keys.length - 1];

                AsyncStorage.multiGet(_keys).then((...values) => {
                    const _values = values[values.length - 1];

                    for (let [ key, value ] of _values) {
                        if (!this.hasOwnProperty(key)) {
                            this[key] = value;
                        }
                    }

                    resolve();
                })
            })
        })
    }

    getItem(key) {
        return this[key];
    }

    setItem(key, value) {
        AsyncStorage.setItem(key, value, () => {this[key] = value});
    }

    removeItem(key) {
        AsyncStorage.removeItem(key, () => {delete this[key]});
    }
}