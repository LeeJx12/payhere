import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterPane } from "../../register";
import SearchPane from "../../search/components/SearchPane";
import { TOP_NAV_TAB_HOME, TOP_NAV_TAB_REGISTERED } from "../constants";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _tab } = this.props;

        return (
            <>
                {
                    TOP_NAV_TAB_HOME === _tab &&
                    <SearchPane/>
                }
                {
                    TOP_NAV_TAB_REGISTERED === _tab &&
                    <RegisterPane/>
                }
            </>
        )
    }
}

function _mapStateToProps(state) {
    const tab = state['test/payhere/common'].tab;

    return {
        _tab: tab
    }
}

export default connect(_mapStateToProps)(Container);