import React, { Component } from "react";
import { connect } from "react-redux";
import { ISSUE_TAB_ALL } from "../../common/constants";
import { changeIssueTab } from "../actions";
import { IssueListItem } from "./IssueListItem";
import SimplePagination from "./SimplePagination";

class IssueList extends Component {
    render() {
        const { _registerList, _issues, _issueTab } = this.props;

        let _issueList = [];
        if (ISSUE_TAB_ALL === _issueTab) {
            Object.keys(_issues).forEach(key => {
                _issueList = [..._issueList, ..._issues[key]];
            })
        } else {
            _issueList = [..._issues[_issueTab]];
        }

        return (
            <>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className={`nav-link ${ISSUE_TAB_ALL === _issueTab ? 'active' : ''}`} href="#" id={ISSUE_TAB_ALL} onClick={this.issueTabHandler}>전체</a>
                            </li>
                            {
                                _registerList.map(item => (
                                    <li className="nav-item" key={item.id}>
                                        <a className={`nav-link ${item.full_name === _issueTab ? 'active' : ''}`} href="#" id={item.full_name} onClick={this.issueTabHandler}>{item.full_name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="overflow-auto h-50">
                    {
                        _issueList.map(item => (<IssueListItem item={item} key={item.id}/>))
                    }
                </div>
                <SimplePagination _issueList={_issueList} />
            </>
        )
    }

    issueTabHandler = e => {
        const { _changeTab } = this.props;

        _changeTab(e.target.id);
    }
}

function _mapStateToProps(state) {
    const { registerList } = state[`test/payhere/register`];
    const { issues, issueTab } = state[`test/payhere/issue`];

    return {
        _registerList: registerList,
        _issues: issues,
        _issueTab: issueTab,
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _changeTab: function(tab) {
            dispatch(changeIssueTab(tab));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(IssueList);