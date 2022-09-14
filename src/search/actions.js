import { ACTION_ON_SEARCH, ON_SEARCH_RESULT } from "./actionTypes";

/**
 * 검색 API 호출
 * @param {*} keyword 
 * @param {*} page 
 * @returns 
 */
export function onSearch(keyword, page) {
    return {
        type: ACTION_ON_SEARCH,
        keyword: keyword,
        page: page,
    }
}

/**
 * 검색 API 호출 결과 reducer로 전달
 * @param {*} result 
 * @param {*} keyword 
 * @param {*} page 
 * @returns 
 */
export function onSearchResult(result, keyword, page) {
    return {
        type: ON_SEARCH_RESULT,
        result: result,
        keyword: keyword,
        page: page,
    }
}