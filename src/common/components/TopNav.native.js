import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchInput } from "../../search/components";
import { changeTab } from "../actions";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import GITHUB from '../../../public/icons/github.svg';
import { Div, A, Button, P } from 'reactnative-ui-bootstrap';


class TopNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { _tab } = this.props;
        
        return (
            <Div className={'navbar navbar-expand-lg bg-light mt-2'}>
                <Div className={'container-fluid'}>
                    <A className={'navbar-brand'} href="#">
                        <GITHUB width={30} height={24} fill={'#000000'}/>
                    </A>
                    <Button className={'navbar-toggler'} type="PRIMARY">
                        <P className={'navbar-toggler-icon'}></P>
                    </Button>
                    <Div className={'collapse navbar-collapse'}>
                        <Div className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                            <Div className={'nav-item'}>
                                <A className={`nav-link ${'HOME' === _tab ? 'active' : ''}`} onClick={() => this.eventHandler('HOME')}>Home</A>
                            </Div>
                            <Div className={'nav-item'}>
                                <A className={`nav-link ${'ISSUES' === _tab ? 'active' : ''}`} onClick={() => this.eventHandler('ISSUES')}>Issues</A>
                            </Div>
                            <Div className={'nav-item'}>
                                <A className={`nav-link ${'REGISTERED' === _tab ? 'active' : ''}`} onClick={() => this.eventHandler('REGISTERED')}>Registered</A>
                            </Div>
                        </Div>
                        {/* <SearchInput/> */}
                    </Div>
                </Div>
            </Div>
        )
    }

    eventHandler = key => {
        const { _changeTab, _tab } = this.props;

        if (key === _tab) return;

        _changeTab(key);
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