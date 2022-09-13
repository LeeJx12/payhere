import { ISSUE_TAB_ALL } from "../common/constants";
import ReducerRegistry from "../redux/ReducerRegistry";
import { DEL_REPOSITORY } from "../register";
import { CHANGE_ISSUE_TAB, SET_ISSUE_LIST } from "./actionTypes";


function _getInitialState() {
    return {
        issues: {},
        totalCnt: 0,
        issueTab: ISSUE_TAB_ALL,
        page: 1
    }
}

ReducerRegistry.register(`test/payhere/issue`, (state = _getInitialState(), action) => {
    switch (action.type) {
        case SET_ISSUE_LIST: {
            _setIssueList(state, action);
            break;
        }
        case DEL_REPOSITORY: {
            _delIssueList(state, action);
            break;
        }
        case CHANGE_ISSUE_TAB: {
            state.issueTab = action.tab;
            state.page = 1;
            break;
        }
    }

    return {
        ...state
    }
})


function _setIssueList(state, {name, data, page}) {
    const { issues } = state;

    issues[name] = data;
    state.totalCnt = Object.keys(issues).reduce((acc, curr) => acc + issues[curr].length, 0);
    state.issues = _.cloneDeep(issues);
    state.page = page;
}

function _delIssueList(state, {name}) {
    const { issues } = state;

    delete issues[name];
    state.totalCnt = Object.keys(issues).reduce((acc, curr) => acc + issues[curr].length, 0);
    state.issues = _.cloneDeep(issues);
    state.page = page;
}