import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchResultList } from "../../search/components";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _searchResult } = this.props;

        return (
            <>
                { _searchResult && _searchResult.data.total_count > 0 &&
                    <SearchResultList/>
                }
                { _searchResult && _searchResult.data.total_count === 0 &&
                    <div className="mt-5 p-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className="w-25" src="/public/icons/alert.svg" />
                            <h1 className="m-5">검색결과가 없습니다!</h1>
                        </div>
                    </div>
                }
                { !_searchResult && 
                    <div className="mt-5 p-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className="w-25" src="/public/icons/search.svg" />
                            <h1 className="m-5">Github Repository를 검색해보세요!</h1>
                        </div>
                    </div>
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

export default connect(_mapStateToProps)(Container);