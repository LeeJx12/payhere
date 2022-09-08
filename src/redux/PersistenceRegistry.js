import md5 from 'js-md5';
import Storage from './components';

const PERSISTED_STATE_NAME = 'payhere-state';

class PersistenceRegistry {
    constructor() {
        this._elements = {};
        this._defaultStates = {};
        this._checksum = '';
        this._storage = new Storage();
    }

    getPersistedState() {
        let filteredPersistedState = {};

        for (const subtreeName of Object.keys(this._elements)) {
            const persistedSubtree
                = this._getPersistedSubtree(
                    subtreeName,
                    this._elements[subtreeName],
                    this._defaultStates[subtreeName]);

            if (persistedSubtree !== undefined) {
                filteredPersistedState[subtreeName] = persistedSubtree;
            }
        }

        if (Object.keys(filteredPersistedState).length === 0) {
            let persistedState = this._storage.getItem(PERSISTED_STATE_NAME);

            if (persistedState) {
                try {
                    persistedState = JSON.parse(persistedState);
                } catch (error) {
                    persistedState = {};
                }

                filteredPersistedState = this._getFilteredState(persistedState);

                this.persistState(filteredPersistedState);
                this._storage.removeItem(PERSISTED_STATE_NAME);
            }
        }

        this._checksum = this._calculateChecksum(filteredPersistedState);

        return filteredPersistedState;
    }

    persistState(state) {
        const filteredState = this._getFilteredState(state);
        const checksum = this._calculateChecksum(filteredState);

        if (checksum !== this._checksum) {
            for (const subtreeName of Object.keys(filteredState)) {
                try {
                    this._storage.setItem(subtreeName, JSON.stringify(filteredState[subtreeName]));
                } catch (error) {
                    console.log('Error persisting redux subtree', subtreeName, error);
                }
            }
            this._checksum = checksum;
        }
    }

    register(
            name,
            config = true,
            defaultState) {
        this._elements[name] = config;
        this._defaultStates[name] = defaultState;
    }

    _calculateChecksum(state) {
        try {
            return md5.hex(JSON.stringify(state) || '');
        } catch (error) {
            console.log('Error calculating checksum for state', error);

            return '';
        }
    }

    _getFilteredState(state) {
        const filteredState = {};

        for (const name of Object.keys(this._elements)) {
            if (state[name]) {
                filteredState[name]
                    = this._getFilteredSubtree(
                        state[name],
                        this._elements[name]);
            }
        }

        return filteredState;
    }

    _getFilteredSubtree(subtree, subtreeConfig) {
        let filteredSubtree;

        if (typeof subtreeConfig === 'object') {
            filteredSubtree = {};
            for (const persistedKey of Object.keys(subtree)) {
                if (subtreeConfig[persistedKey]) {
                    filteredSubtree[persistedKey] = subtree[persistedKey];
                }
            }
        } else if (subtreeConfig) {
            filteredSubtree = subtree;
        }

        return filteredSubtree;
    }

    _getPersistedSubtree(subtreeName, subtreeConfig, subtreeDefaults) {
        let persistedSubtree = this._storage.getItem(subtreeName);

        if (persistedSubtree) {
            try {
                persistedSubtree = JSON.parse(persistedSubtree);

                const filteredSubtree
                    = this._getFilteredSubtree(persistedSubtree, subtreeConfig);

                if (filteredSubtree !== undefined) {
                    return this._mergeDefaults(
                        filteredSubtree, subtreeDefaults);
                }
            } catch (error) {
                console.error(
                    'Error parsing persisted subtree',
                    subtreeName,
                    persistedSubtree,
                    error);
            }
        }

        return undefined;
    }

    _mergeDefaults(subtree, defaults) {
        if (!defaults) {
            return subtree;
        }

        if (!Array.isArray(subtree)) {
            return {
                ...defaults,
                ...subtree
            };
        }
    }
}

export default new PersistenceRegistry();
