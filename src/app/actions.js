import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from "./actionTypes"

/**
 * App 실행시
 * @param {*} app 
 * @returns 
 */
export function appWillMount(app) {
    return (dispatch) => {
        dispatch({
            type: APP_WILL_MOUNT,
            app
        })
    }
}

/**
 * App 종료시
 * @param {*} app 
 * @returns 
 */
export function appWillUnmount(app) {
    return {
        type: APP_WILL_UNMOUNT,
        app
    }
}