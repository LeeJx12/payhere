import { combineReducers, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';
import PersistenceRegistry from './PersistenceRegistry';
import MiddlewareRegistry from './MiddlewareRegistry';
import StateListenerRegistry from './StateListenerRegistry';

/**
 * Reducer 초기화, 등록 및 Provider에 제공할 store 생성
 */
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
        let middleware = compose(MiddlewareRegistry.applyMiddleware(Thunk));
        const store = createStore(reducer, PersistenceRegistry.getPersistedState(), middleware);

        StateListenerRegistry.subscribe(store);

        return store;
    }
}
export default new ReducerRegistry();
