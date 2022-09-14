import { ADD_REPOSITORY, DEL_REPOSITORY, GET_REPOSITORY, GET_REPOSITORY_RESULT } from "./actionTypes";

/**
 * Repository 추가
 * @param {*} item 
 * @returns 
 */
export function addRepository(item) {
    return {
        type: ADD_REPOSITORY,
        item: item
    }
}

/**
 * Repository 삭제
 * @param {*} name 
 * @returns 
 */
export function delRepository(name) {
    return {
        type: DEL_REPOSITORY,
        name: name
    }
}

/**
 * Repository API 호출
 * @param {*} registerList 
 * @returns 
 */
export function getRepository(registerList) {
    return {
        type: GET_REPOSITORY,
        registerList: registerList
    }
}

/**
 * Repository API 호출 결과 reducer에 전달
 * @param {*} resultList 
 * @returns 
 */
export function getRepositoryResult(resultList) {
    return {
        type: GET_REPOSITORY_RESULT,
        resultList: resultList
    }
}