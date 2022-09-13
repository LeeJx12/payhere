import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "../../common/components/Pagination";
import { ISSUE_TAB_ALL, LIST_COUNT_DEFAULT } from "../../common/constants";
import { changeIssueTab, getIssueList } from "../actions";
import { IssueListItem } from "./IssueListItem";

class IssueList extends Component {
    render() {
        const { _registerList, _issues, _issueTab, _page } = this.props;

        let _issueList = [];
        let _totalCnt = 0;
        if (ISSUE_TAB_ALL === _issueTab) {
            Object.keys(_issues).forEach(key => {
                _issueList = [..._issueList, ..._issues[key]];
                _issueList.forEach(item => item.repo_name = key);
                _totalCnt = Math.max(_totalCnt, _registerList.find(item => item.full_name === key).open_issues_count);
            })
        } else {
            _issueList = [..._issues[_issueTab]];
            _issueList.forEach(item => item.repo_name = _issueTab);
            _totalCnt = _registerList.find(item => item.full_name === _issueTab)?.open_issues_count || 0;
        }

        const totalPage = Math.ceil(_totalCnt / LIST_COUNT_DEFAULT);

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
                    {
                        _issueList.length === 0 &&
                        <h4 className="mt-5 pt-5 text-center">Issue가 없습니다.</h4>
                    }
                </div>
                { _totalCnt > 0 &&
                    <Pagination
                        pageId={_page}
                        totalPage={totalPage}
                        isSimple={ISSUE_TAB_ALL === _issueTab}
                        pageAction={this.paging}
                    />
                }
            </>
        )
    }

    issueTabHandler = e => {
        const { _changeTab } = this.props;

        _changeTab(e.target.id, () => this.paging(1));
    }

    paging = (page) => {
        const { _registerList, _issueTab, _onPaging } = this.props;

        if (ISSUE_TAB_ALL === _issueTab) {
            _registerList.forEach(item => {
                _onPaging(item, page);
            })
        } else {
            _onPaging(_registerList.find(item => item.full_name === _issueTab), page);
        }
    }
}

function _mapStateToProps(state) {
    const { registerList } = state[`test/payhere/register`];
    const { issues, issueTab, page } = state[`test/payhere/issue`];

    return {
        _registerList: registerList,
        _issues: issues,
        _issueTab: issueTab,
        _page: page
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _changeTab: function(tab, callbackFn) {
            dispatch(changeIssueTab(tab), callbackFn);
        },
        _onPaging: function(item, page) {
            dispatch(getIssueList(item, page));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(IssueList);