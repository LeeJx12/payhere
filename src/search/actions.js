import { ACTION_ON_SEARCH } from "./actionTypes";


export function onSearch(keyword) {
    return {
        type: ACTION_ON_SEARCH,
        keyword: keyword
    }
}