import { LIST_COUNT_DEFAULT } from '../common/constants';
import MiddlewareRegistry from '../redux/MiddlewareRegistry';
import { onSearchResult } from './actions';
import { ACTION_ON_SEARCH } from './actionTypes';

MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
        case ACTION_ON_SEARCH: {
            onSearch(store, action);
            break;
        }
    }

    return next(action);
})

function onSearch({dispatch, getState}, {keyword, page = 1}) {
    const octokit = getState()['test/payhere/app'].octokit;

    octokit.request(`GET /search/repositories?q=${encodeURIComponent(keyword)}&per_page=${LIST_COUNT_DEFAULT}&page=${page}`)
        .then(result => {
            console.log(result);
            dispatch(onSearchResult(result, keyword, page));
        })
}