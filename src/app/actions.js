import { APP_WILL_MOUNT, APP_WILL_UNMOUNT } from "./actionTypes"


export function appWillMount(app) {
    return (dispatch) => {
        dispatch({
            type: APP_WILL_MOUNT,
            app
        })
    }
}

export function appWillUnmount(app) {
    return {
        type: APP_WILL_UNMOUNT,
        app
    }
}