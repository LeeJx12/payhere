import { CHANGE_ISSUE_TAB, GET_ISSUE_LIST, SET_ISSUE_LIST } from "./actionTypes";

/**
 * API 호출 (이슈)
 * @param {*} item 
 * @param {*} page 
 * @returns 
 */
export function getIssueList(item, page=1) {
    return {
        type: GET_ISSUE_LIST,
        item: item,
        page: page
    }
}

/**
 * API 호출 후 가져온 이슈를 reducer에 전달
 * @param {*} name 
 * @param {*} data 
 * @param {*} page 
 * @returns 
 */
export function setIssueList(name, data, page) {
    return {
        type: SET_ISSUE_LIST,
        name: name,
        data: data,
        page: page
    }
}

/**
 * 이슈모아보기 탭변경
 * @param {*} tab 
 * @returns 
 */
export function changeIssueTab(tab) {
    return {
        type: CHANGE_ISSUE_TAB,
        tab: tab
    }
}