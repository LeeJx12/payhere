import _ from 'lodash';

class StateListenerRegistry {
    constructor() {
        this._selectorListeners = new Set();
        this._listener = {
            prevSelections: new Map(),
            store: {}
        }
    }

    _listener({ prevSelections, store }) {
        for (const selectorListener of this._selectorListeners) {
            const prevSelection = prevSelections.get(selectorListener);

            try {
                const selection
                    = selectorListener.selector(
                        store.getState(),
                        prevSelection);
                const useDeepEquals = selectorListener?.options?.deepEquals;

                if ((useDeepEquals && !_.isEqual(prevSelection, selection))
                        || (!useDeepEquals && prevSelection !== selection)) {
                    prevSelections.set(selectorListener, selection);
                    selectorListener.listener(selection, store, prevSelection);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    register(selector, listener, options) {
        this._selectorListeners.add({
            listener,
            selector,
            options
        });
    }

    subscribe(store) {
        if (this._selectorListeners.size) {
            store.subscribe(
                this._listener.bind(
                    this,
                    {
                        prevSelections: new Map(),
                        store
                    }));
        }
    }
}

export default new StateListenerRegistry();
