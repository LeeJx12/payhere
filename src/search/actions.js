import { ACTION_ON_SEARCH, ON_SEARCH_RESULT } from "./actionTypes";


export function onSearch(keyword, page) {
    return {
        type: ACTION_ON_SEARCH,
        keyword: keyword,
        page: page,
    }
}

export function onSearchResult(result, keyword, page) {
    return {
        type: ON_SEARCH_RESULT,
        result: result,
        keyword: keyword,
        page: page,
    }
}