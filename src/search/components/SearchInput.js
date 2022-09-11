import React, { Component } from "react";
import { connect } from "react-redux";

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        )
    }
}

function _mapStateToProps(state) {
    return {

    }
}

export default connect(_mapStateToProps)(SearchInput);