import React, { Component } from "react";
import { connect } from "react-redux";
import { NoData } from "../../common/components/NoData";
import RegisterGrid from "./RegisterGrid";

/**
 * 등록된 Repository 영역
 */
class RegisterPane extends Component {
    render() {
        const { _registerList } = this.props;

        return (
            <>
                { _registerList.length > 0 &&
                    <RegisterGrid/>
                }
                { _registerList.length === 0 &&
                    <NoData icon="alert">등록된 Repository가 없습니다!</NoData>
                }
            </>
        )
    }
}

function _mapStateToProps(state) {
    const { registerList } = state[`test/payhere/register`];

    return {
        _registerList: registerList
    }
}

export default connect(_mapStateToProps)(RegisterPane);