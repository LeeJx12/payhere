import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Modal, Progress, TopNav } from '../../common/components'
import { appWillMount, appWillUnmount } from "../actions";
import '../reducers';
import '../../redux/middleware';
import '../../issue/middleware';

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
        const { _onModalShow, _onProgress } = this.props;

        return (
            <>
              <div className="container-fluid overflow-hidden">
                  <TopNav />
                  <Container />
              </div>
              { _onModalShow && 
                  <Modal />
              }
              { _onProgress && 
                  <Progress />
              }
            </>
        )
    }
}

function mapStateToProps(state) {
    const { onShow } = state[`test/payhere/common`].modal;
    const onProgress = state[`test/payhere/common`].onProgress;

    return {
        _onModalShow: onShow,
        _onProgress: onProgress
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