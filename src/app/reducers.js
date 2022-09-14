import { Octokit } from 'octokit';
import ReducerRegistry from '../redux/ReducerRegistry';
import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from './actionTypes';

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

/**
 * octokit 초기화
 * Github API 호출 회수 제한으로 인해 PAT 설정 추가 (.env : PERSONAL_ACCESS_TOKEN)
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function initializeApp(state, action) {
    const { app } = action;

    if (state.app !== app) {
        let authToken = undefined;
        if (process.env?.PERSONAL_ACCESS_TOKEN) {
            authToken = {
                auth: process.env?.PERSONAL_ACCESS_TOKEN
            }
        }

        const octokit = new Octokit(authToken);
        return {
            ...state,
            octokit: octokit,
            app
        };
    } else {
        return state;
    }
}