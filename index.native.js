/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import App from './src/app/components';
import ReduxRegistry from './src/redux/ReduxRegistry';

AppRegistry.registerComponent(appName, () => {
    const store = ReduxRegistry._createStore();
    
    return (
        <Provider store={store}>
            {() => App}
        </Provider>
    )
});
