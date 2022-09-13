import React, { Component } from "react";
import { connect } from "react-redux";
import { showProgress } from "../../common/actions";
import { SearchResultItem } from "../../search/components/SearchResultItem";
import { delRepository, getRepository } from "../actions";

class RegisterGrid extends Component {
    render() {
        const { _registerList, _delRepository } = this.props;

        return (
            <div className="d-flex flex-wrap">
                {
                    _registerList.map(item => {
                        return (
                            <div className="flex-fill w-50 h-50 mw-50 p-2" key={item.id}>
                                <SearchResultItem
                                    item={item}
                                    _delRepository={_delRepository}
                                    isRegistered={true}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const { registerList } = state[`test/payhere/register`];

    return {
        _registerList: registerList,
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _delRepository(name) {
            dispatch(delRepository(name));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(RegisterGrid);