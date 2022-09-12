import React, { Component } from "react";
import { connect } from "react-redux";
import { ISSUE_TAB_ALL } from "../../common/constants";
import { getIssueList } from "../actions";

class SimplePagination extends Component {
    render() {
        let {
            _isPrevBtnShow,
            _isNextBtnShow,
            _issueList = [],
        } = this.props;

        if (_issueList.length === 0) _isNextBtnShow = false;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    { 
                        _isPrevBtnShow && 
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id="PREV">Prev</a></li>
                    }
                    {
                        _isNextBtnShow &&
                        <li className="page-item"><a className="page-link" href="#" onClick={this.eventHandler} id="NEXT">Next</a></li>
                    }
                </ul>
            </nav>
        )
    }

    eventHandler = e => {
        const { _page, _getIssueList, _issueTab, _registerList } = this.props;
        const id = e.target.id;
        let pageId = 1;

        if ('NEXT' === id) pageId = _page + 1;
        else pageId = _page - 1;
        
        if (ISSUE_TAB_ALL === _issueTab) {
            _registerList.forEach(item => {
                _getIssueList(item, pageId);
            })
        } else {
            _getIssueList(_registerList.find(item => item.full_name === _issueTab), pageId);
        }
    }
}

function _mapStateToProps(state) {
    const { page, issueTab } = state['test/payhere/issue'];
    const { registerList } = state[`test/payhere/register`];
    const isPrevBtnShow = page !== 1;
    const isNextBtnShow = true;

    return {
        _page: page,
        _isPrevBtnShow: isPrevBtnShow,
        _isNextBtnShow: isNextBtnShow,
        _issueTab: issueTab,
        _registerList: registerList,
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _getIssueList: function(item, pageId) {
            dispatch(getIssueList(item, pageId))
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(SimplePagination);