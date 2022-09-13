import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import ReducerRegistry from './src/redux/ReducerRegistry';
import { App } from './src/app/components';
import './src/app/reducers';

const Root = (props) => {
    const store = ReducerRegistry._createStore();

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Root);
