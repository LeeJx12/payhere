import React, { Component } from "react";
import { connect } from "react-redux";
import { NoData } from "../../common/components/NoData";
import { getIssueList } from "../actions";
import IssueList from "./IssueList";
import { showProgress } from '../../common/actions';

class IssuePane extends Component {
    componentDidMount() {
        this.props._registerList.forEach(item => this.props._getIssueList(item));
    }

    componentDidUpdate(prevProps) {
        const prevList = JSON.stringify(prevProps._registerList);
        const currList = JSON.stringify(this.props._registerList);

        if (prevList !== currList) {
            JSON.parse(currList).forEach(item => this.props._getIssueList(item));
        }
    }

    render() {
        const { _registerList, _totalCnt } = this.props;

        return (
            <>
                { _totalCnt > 0 &&
                    <IssueList/>
                }
                { _registerList.length === 0 &&
                    <NoData icon="alert">등록된 Repository가 없습니다!</NoData>
                }
                { _registerList.length !== 0 && _totalCnt === 0 &&
                    <NoData icon="alert">Issue가 없습니다!</NoData>
                }
            </>
        )
    }
}

function _mapStateToProps(state) {
    const { registerList } = state[`test/payhere/register`];
    const { totalCnt } = state[`test/payhere/issue`];

    return {
        _registerList: registerList,
        _totalCnt: totalCnt
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _getIssueList: function(item) {
            dispatch(showProgress());
            dispatch(getIssueList(item));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(IssuePane);