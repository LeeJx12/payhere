import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppWeb from './src/app/components/App.web';
import ReduxRegistry from './src/redux/ReducerRegistry';

const root = ReactDOM.createRoot(document.getElementById("app"));
const store = ReduxRegistry._createStore();

window.APP = store;

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppWeb />
        </Provider>
    </React.StrictMode>
);