import React, { Component } from "react";
import { connect } from "react-redux";
import { showModalPopup } from "../../common/actions";
import { LIST_COUNT_DEFAULT, MODAL_TYPE_ALERT, REPOSITORY_REGISTER_LIMIT } from "../../common/constants";
import { addRepository, delRepository } from "../../register";
import Pagination from "./Pagination";
import SearchResultItem from "./SearchResultItem";

export class SearchResultList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { _items, _addRepository, _delRepository, _addRepositoryError, _registerList } = this.props;

        if (_registerList.length >= REPOSITORY_REGISTER_LIMIT) {
            _addRepository = () => _addRepositoryError(LIST_COUNT_DEFAULT);
        }

        return (
            <div className="overflow-auto h-50">
                { _items.map(item => {
                    const isRegistered = _registerList.some(regItem => regItem.id === item.id)

                    return (
                        <SearchResultItem 
                            item={item} 
                            key={item.id}
                            _addRepository={_addRepository}
                            _delRepository={_delRepository}
                            isRegistered={isRegistered}
                        />
                    )
                })}
                <Pagination/>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const result = state['test/payhere/search'].searchResult;
    const registerList = state['test/payhere/register'].registerList || [];
    const { items } = result.data;

    return {
        _items: items,
        _registerList: registerList
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _addRepository: function(item) {
            dispatch(addRepository(item));
        },
        _delRepository: function(name) {
            dispatch(delRepository(name));
        },
        _addRepositoryError: function(cnt) {
            dispatch(showModalPopup(MODAL_TYPE_ALERT, `최대 등록 가능한 개수를 초과했습니다!(${cnt})`));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(SearchResultList);