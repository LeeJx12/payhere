import { combineReducers, createStore } from 'redux';
import Thunk from 'redux-thunk';
import PersistenceRegistry from './PersistenceRegistry';
import MiddlewareRegistry from './MiddlewareRegistry';
import StateListenerRegistry from './StateListenerRegistry';

class ReducerRegistry {
    constructor() {
        this._elements = {};
    }

    combineReducers(additional = {}) {
        return combineReducers({
            ...this._elements,
            ...additional
        });
    }

    register(name, reducer) {
        this._elements[name] = reducer;
    }

    _createStore() {
        const reducer = this.combineReducers();
        let middleware = MiddlewareRegistry.applyMiddleware(Thunk);
        const store = createStore(reducer, PersistenceRegistry.getPersistedState(), middleware);

        StateListenerRegistry.subscribe(store);

        return store;
    }
}
export default new ReducerRegistry();
