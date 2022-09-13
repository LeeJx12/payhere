import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { appWillMount, appWillUnmount } from '../actions';
import { connect } from 'react-redux';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import TopNavNative from '../../common/components/TopNav.native';
import '../../redux/middleware';
import '../../issue/middleware';
import '../../common/reducers';
import '../../search/reducers';
import '../../register/reducers';
import '../../issue/reducers';

const styleSheet = new BootstrapStyleSheet();
const { s } = styleSheet;

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
          <SafeAreaView>
              <View style={[s.containerFluid, s.overflowHidden]}>
                   <TopNavNative />
                   {/* <Container /> */}
              </View>
              {/* { _onModalShow && 
                  <Modal />
              }
              { _onProgress && 
                  <Progress />
              } */}
          </SafeAreaView>
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
