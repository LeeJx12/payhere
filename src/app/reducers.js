import { Octokit } from 'octokit';
import ReducerRegistry from '../redux/ReducerRegistry';
import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from './actionTypes';

import '../common/reducers';
import '../search/reducers';
import '../register/reducers';

ReducerRegistry.register('test/payhere/app', (state = {}, action) => {
    switch(action.type) {
        case APP_WILL_MOUNT: {
            return initializeApp(state, action);
        }
        case APP_WILL_UNMOUNT: {
            if (state.app === action.app) {
                return {
                    ...state,
                    app: undefined
                };
            }
            break;
        }
    }
    return state;
})

function initializeApp(state, action) {
    const { app } = action;

    if (state.app !== app) {
        const octokit = new Octokit();
        return {
            ...state,
            octokit: octokit,
            app
        };
    } else {
        return state;
    }
}