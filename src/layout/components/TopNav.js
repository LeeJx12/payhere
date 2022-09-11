import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchInput } from "../../search/components";

class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/public/icons/github.svg" alt="Bootstrap" width="30" height="24"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Issues</a>
                            </li>
                        </ul>
                        <SearchInput/>
                    </div>
                </div>
            </nav>
        )
    }
}

function _mapStateToProps(state) {
    return {

    }
}

export default connect(_mapStateToProps)(TopNav);