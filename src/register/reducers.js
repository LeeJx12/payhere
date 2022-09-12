import PersistenceRegistry from '../redux/PersistenceRegistry';
import ReducerRegistry from '../redux/ReducerRegistry';
import { ADD_REPOSITORY, DEL_REPOSITORY, GET_REPOSITORY_RESULT } from './actionTypes';

function _getInitialState() {
    const persistedState = PersistenceRegistry.getPersistedState();

    return persistedState[`test/payhere/register`] ?? {
        registerList: [],
    }
}

PersistenceRegistry.register(`test/payhere/register`, {
    registerList: true,
})

ReducerRegistry.register(`test/payhere/register`, (state = _getInitialState(), action) => {
    switch (action.type) {
        case ADD_REPOSITORY: {
            _addRepository(state, action);
            break;
        }
        case DEL_REPOSITORY: {
            state.registerList = state.registerList.filter(item => item.full_name !== action.name);
            break;
        }
        case GET_REPOSITORY_RESULT: {
            state.resultList = action.resultList;
            break;
        }
    }

    return {
        ...state
    }
});

function _addRepository(state, action) {
    state.registerList.push(action.item);
    state.registerList = JSON.parse(JSON.stringify(state.registerList));
}