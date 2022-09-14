import React, { Component } from "react";
import { connect } from "react-redux";
import { showModalPopup, showProgress } from "../../common/actions";
import { Pagination } from "../../common/components/Pagination";
import { LIST_COUNT_DEFAULT, MODAL_TYPE_ALERT, REPOSITORY_REGISTER_LIMIT } from "../../common/constants";
import { addRepository, delRepository } from "../../register";
import SearchResultItem from "./SearchResultItem";
import { onSearch } from '../actions';

/**
 * 검색결과 리스트
 */
export class SearchResultList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { 
            _items, 
            _addRepository, 
            _delRepository,
            _addRepositoryError, 
            _registerList,
            _page,
            _totalCnt,
        } = this.props;

        const totalPage = Math.ceil(Number(_totalCnt) / LIST_COUNT_DEFAULT);

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
                <Pagination 
                    pageId={_page}
                    totalPage={totalPage}
                    pageAction={this.paging}
                />
            </div>
        )
    }

    paging = (page) => {
        const { _onPaging, _keyword } = this.props;
        _onPaging(_keyword, page);
    }
}

function _mapStateToProps(state) {
    const { searchResult, page, keyword } = state['test/payhere/search'];
    const registerList = state['test/payhere/register'].registerList || [];
    const { items, total_count } = searchResult.data;

    return {
        _items: items,
        _registerList: registerList,
        _page: page,
        _keyword: keyword,
        _totalCnt: total_count,
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
        },
        _onPaging: function(keyword, page) {
            dispatch(showProgress());
            dispatch(onSearch(keyword, page));
        },
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(SearchResultList);