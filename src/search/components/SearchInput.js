import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTab, showModalPopup, showProgress } from "../../common/actions";
import { MODAL_TYPE_ALERT, TOP_NAV_TAB_HOME } from "../../common/constants";
import { onSearch } from "../actions";
import '../middleware';

/**
 * 검색 Input
 */
class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="d-flex" role="search" onSubmit={this.actionSearch}>
                <input className="form-control me-2" type="search" id="keyword" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        )
    }

    actionSearch = e => {
        e.preventDefault();
        const value = e.target.closest('form').keyword.value;

        if('' === value || undefined === value) {
            this.props._onSearchError('검색어를 입력하세요!');
            return;
        }

        this.props._onSearch(value);
    }
}

function _mapStateToProps(state) {
    return {
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _onSearch: function(keyword) {
            dispatch(showProgress());
            dispatch(changeTab(TOP_NAV_TAB_HOME));
            dispatch(onSearch(keyword));
        },
        _onSearchError: function(message) {
            dispatch(showModalPopup(MODAL_TYPE_ALERT, message));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(SearchInput);