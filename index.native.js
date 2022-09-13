import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import ReducerRegistry from './src/redux/ReducerRegistry';
//import './src/app/reducers';
import AppNative from './src/app/components/App.native';

const Root = (props) => {
    const store = ReducerRegistry._createStore();

    return (
        <Provider store={store}>
            <AppNative/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Root);
