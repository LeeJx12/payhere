import { CHANGE_TAB, HIDE_MODAL_POPUP, HIDE_PROGRESS, SHOW_MODAL_POPUP, SHOW_PROGRESS } from './actionTypes';

/**
 * 메세지 팝업(Alert, Confirm) 띄우기
 * @param {*} modalType 
 * @param {*} body 
 * @param {*} callbackFn 
 * @returns 
 */
export function showModalPopup(modalType, body, callbackFn) {
    return {
        type: SHOW_MODAL_POPUP,
        modalType: modalType,
        body: body,
        callbackFn: callbackFn
    }
}

/**
 * 메세지 팝업(Alert, Confirm) 숨기기
 * @returns 
 */
export function hideModalPopup() {
    return { type: HIDE_MODAL_POPUP };
}

/**
 * 프로그레스 띄우기
 * @returns 
 */
export function showProgress() {
    return { type: SHOW_PROGRESS };
}

/**
 * 프로그레스 숨기기
 * @returns 
 */
export function hideProgress() {
    return { type: HIDE_PROGRESS };
}

/**
 * 상단 메뉴 탭변경
 * @param {*} tab 
 * @returns 
 */
export function changeTab(tab) {
    return {
        type: CHANGE_TAB,
        tab: tab
    }
}