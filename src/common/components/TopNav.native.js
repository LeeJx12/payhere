import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchInput } from "../../search/components";
import { changeTab } from "../actions";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
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
                        <GITHUB width={30} height={24} fill={'#000000'}/>
                    </View>
                    <TouchableOpacity style={[s.navbarToggler]}>
                        <Text style={[s.navbarTogglerIcon]}></Text>
                    </TouchableOpacity>
                    <SafeAreaView style={[s.collapse, s.navbarCollapse]}>
                        <FlatList 
                            style={[s.navbarNav, s.meAuto, s.mb2, s.mbLg0]}
                            data={[
                                {key : 'HOME', name: 'Home'},
                                {key : 'ISSUES', name: 'Issues'},
                                {key : 'REGISTERED', name: 'Registered'}
                            ]}
                            renderItem={({key, name}) => (
                                <TouchableOpacity style={[s.navItem]} onClick={() => this.eventHandler(key)}>
                                    <Text>{name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </SafeAreaView>
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