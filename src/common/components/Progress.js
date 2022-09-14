import React, { Component, CSSProperties } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { connect } from "react-redux";

const override = {
    display: 'block',
    margin: 'auto',
    borderColor: 'red'
}

/**
 * API 호출시 프로그레스 표시
 */
export class Progress extends Component {
    render() {
        const { _onProgress } = this.props;

        const prgClass = `modal-backdrop fade d-flex ${_onProgress ? 'show' : 'dp_n'}`;

        return (
            <div className={prgClass}>
                <BeatLoader color="#40BAD2" loading={_onProgress} cssOverride={override} size={15} />
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const onProgress = state[`test/payhere/common`].onProgress;

    return {
        _onProgress: onProgress,
    };
}

export default connect(_mapStateToProps)(Progress);