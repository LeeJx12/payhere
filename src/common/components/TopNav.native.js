import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchInput } from "../../search/components";
import { changeTab } from "../actions";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Image, View } from "react-native";
import GITHUB from '../../../public/icons/github.svg';

const styleSheet = new BootstrapStyleSheet();
const { s } = styleSheet;

class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _tab } = this.props;

        return (
            <View style={[s.navbar, s.navbarExpandLg, s.bgLight, s.mt2]}>
                <View style={[s.containerFluid]}>
                    <View style={[s.navbarBrand]}>
                        <GITHUB width="30" height="24"/>
                    </View>
                </View>
            </View>
        )
    }

    eventHandler = e => {
        // e.preventDefault();
        // const { _changeTab, _tab } = this.props;

        // if (e.target.id === _tab) return;

        // _changeTab(e.target.id);
    }
}

function _mapStateToProps(state) {
    const tab = state['test/payhere/common'].tab;

    return {
        _tab: tab
    }
}

function _mapDispatchToProps(dispatch) {
    return {
        _changeTab: function(tab) {
            dispatch(changeTab(tab));
        }
    }
}

export default connect(_mapStateToProps, _mapDispatchToProps)(TopNav);

// {/* <nav className="navbar navbar-expand-lg bg-light mt-2">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         <img src="/public/icons/github.svg" alt="Bootstrap" width="30" height="24"></img>
//                     </a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className={`nav-link ${'HOME' === _tab ? 'active' : ''}`} id="HOME" href="#" onClick={this.eventHandler}>Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className={`nav-link ${'ISSUES' === _tab ? 'active' : ''}`} id="ISSUES" href="#" onClick={this.eventHandler}>Issues</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className={`nav-link ${'REGISTERED' === _tab ? 'active' : ''}`} id="REGISTERED" href="#" onClick={this.eventHandler}>Registered</a>
//                             </li>
//                         </ul>
//                         <SearchInput/>
//                     </div>
//                 </div>
//             </nav> */}