import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "./Pagination";
import SearchResultItem from "./SearchResultItem";

export class SearchResultList extends Component {
    render() {
        const { _items } = this.props;

        return (
            <div className="overflow-auto h-50">
                { _items.map(item => <SearchResultItem item={item} key={item.id}/>)}
                <Pagination/>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const result = state['test/payhere/search'].searchResult;
    const { items } = result.data;

    return {
        _items: items
    }
}

function _mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(SearchResultList);