import { ADD_REPOSITORY, DEL_REPOSITORY, GET_REPOSITORY, GET_REPOSITORY_RESULT } from "./actionTypes";


export function addRepository(item) {
    return {
        type: ADD_REPOSITORY,
        item: item
    }
}

export function delRepository(name) {
    return {
        type: DEL_REPOSITORY,
        name: name
    }
}

export function getRepository(registerList) {
    return {
        type: GET_REPOSITORY,
        registerList: registerList
    }
}

export function getRepositoryResult(resultList) {
    return {
        type: GET_REPOSITORY_RESULT,
        resultList: resultList
    }
}