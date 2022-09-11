import MiddlewareRegistry from '../redux/MiddlewareRegistry';
import { onSearch } from './actions';
import { ACTION_ON_SEARCH } from './actionTypes';

MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
        case ACTION_ON_SEARCH: {
            onSearch(store, action.keyword);
        }
    }
})

function onSearch({dispatch, getState}, keyword) {
    
}