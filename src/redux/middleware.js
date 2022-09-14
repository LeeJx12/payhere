import _ from 'lodash';
import MiddlewareRegistry from './MiddlewareRegistry';
import PersistenceRegistry from './PersistenceRegistry';

const PERSIST_STATE_DELAY = 2000;

MiddlewareRegistry.register(store => next => action => {
    const oldState = toState(store);
    const result = next(action);
    const newState = toState(store);

    oldState === newState || throttledPersistState(newState);

    return result;
});

//Storage에 반복적으로 접근시 부하가 크므로 delay를 줌
//lodash _.throttle 사용
export const throttledPersistState
    = _.throttle(
        state => PersistenceRegistry.persistState(state),
        PERSIST_STATE_DELAY);

if (typeof window.addEventListener === 'function') {
    window.addEventListener('unload', () => {
        throttledPersistState.flush();
    });
}

function toState(stateful) {
    if (stateful) {
        if (typeof stateful === 'function') {
            return stateful();
        }

        const { getState } = stateful;

        if (typeof getState === 'function') {
            return getState();
        }
    }

    return stateful;
}