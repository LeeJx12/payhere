import React, { Component } from "react";
import { connect } from "react-redux";
import { hideModalPopup } from "../actions";
import { MODAL_TYPE_ALERT, MODAL_TYPE_CONFIRM } from "../constants";

/**
 * 메세지 팝업 (Alert, Confirm)
 */
export class Modal extends Component {
    render() {
        const { _onShow, _modalType, _body } = this.props;

        const modalClass= `modal fade ${_onShow ? 'show' : ''}`;
        const modalStyle = _onShow ? { display: 'block' } : { display : 'none' };

        return (
            <div className={modalClass} id="modal" tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden={_onShow ? 'false' : 'true'}
                aria-modal={_onShow ? 'true' : 'false'}
                style={modalStyle}
                onClick={this.onClose}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            {_body}
                        </div>
                        <div className="modal-footer">
                            { MODAL_TYPE_CONFIRM === _modalType &&
                                <button type="button" className="btn btn-secondary">취소</button>
                            }
                            { MODAL_TYPE_CONFIRM === _modalType &&
                                <button type="button" className="btn btn-primary" onClick={this.onClick}>확인</button>
                            }
                            { MODAL_TYPE_ALERT === _modalType &&
                                <button type="button" className="btn btn-primary" onClick={this.onClick}>확인</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onClick = () => {
        if (this.props._callbackFn && typeof this.props._callbackFn === 'function') {
            this.props._callbackFn();
        }
    }

    onClose = () => {
        this.props.dispatch(hideModalPopup());
    }
}

function _mapStateToProps(state) {
    const { onShow, modalType, body, callbackFn } = state[`test/payhere/common`].modal;

    return {
        _onShow: onShow,
        _modalType: modalType,
        _body: body,
        _callbackFn: callbackFn
    }
}

export default connect(_mapStateToProps)(Modal);