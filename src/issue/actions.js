import { CHANGE_ISSUE_TAB, GET_ISSUE_LIST, SET_ISSUE_LIST } from "./actionTypes";


export function getIssueList(item, page=1) {
    return {
        type: GET_ISSUE_LIST,
        item: item,
        page: page
    }
}

export function setIssueList(name, data, page) {
    return {
        type: SET_ISSUE_LIST,
        name: name,
        data: data,
        page: page
    }
}

export function changeIssueTab(tab) {
    return {
        type: CHANGE_ISSUE_TAB,
        tab: tab
    }
}