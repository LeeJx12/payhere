import React, { Component } from "react";
import { connect } from "react-redux";
import { NoData } from "../../common/components/NoData";
import { SearchResultList } from "../components";

class SearchPane extends Component {
    render() {
        const { _searchResult } = this.props;

        return (
            <>
                { _searchResult && _searchResult.data.total_count > 0 &&
                    <SearchResultList/>
                }
                { _searchResult && _searchResult.data.total_count === 0 &&
                    <NoData icon="alert">검색결과가 없습니다!</NoData>
                }
                { !_searchResult && 
                    <NoData icon="search">Github Repository를 검색해보세요!</NoData>
                }
            </>
        )
    }
}

function _mapStateToProps(state) {
    const searchResult = state['test/payhere/search'].searchResult;

    return {
        _searchResult: searchResult
    }
}

export default connect(_mapStateToProps)(SearchPane);