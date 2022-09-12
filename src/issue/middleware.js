import { LIST_COUNT_DEFAULT } from "../common/constants";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ADD_REPOSITORY, DEL_REPOSITORY } from "../register";
import { setIssueList } from "./actions";
import { GET_ISSUE_LIST } from "./actionTypes";

MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
        case GET_ISSUE_LIST: {
            _getIssueList(store, action);
            break;
        }
    }

    return next(action);
})

function _getIssueList({dispatch, getState}, {item, page = 1}) {
    const { octokit } = getState()['test/payhere/app'];

    octokit.request(`GET /repos/${item.full_name}/issues?per_page=${LIST_COUNT_DEFAULT}&page=${page}`)
        .then(data => {
            dispatch(setIssueList(item.full_name, data.data, page));
        })
}