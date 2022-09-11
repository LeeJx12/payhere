import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, TopNav } from '../../layout/components'
import { appWillMount, appWillUnmount } from "../actions";
import '../reducers';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props._appWillMount(this);
    }

    componentWillUnmount() {
        this.props._appWillUnmount(this);
    }

    render() {
        return (
            <div className="container-fluid overflow-hidden">
                <TopNav />
                <Container />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        _appWillMount(app) {
            dispatch(appWillMount(app));
        },
        _appWillUnmount(app) {
            dispatch(appWillUnmount(app));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);