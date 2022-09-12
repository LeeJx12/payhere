import ReducerRegistry from '../redux/ReducerRegistry';
import { ON_SEARCH_RESULT } from './actionTypes';

function _getInitialState() {
    return {
        searchResult: undefined,
        keyword: '',
        page: 0,
    }
}

ReducerRegistry.register('test/payhere/search', (state = _getInitialState(), action) => {
    switch (action.type) {
        case ON_SEARCH_RESULT: {
            onSearchResult(state, action);
            break;
        }
    }

    return {
        ...state
    }
})

function onSearchResult(state, action) {
    state.searchResult = action.result;
    state.keyword = action.keyword;
    state.page = action.page;
}