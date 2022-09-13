import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppWeb from './src/app/components/App.web';
import ReducerRegistry from './src/redux/ReducerRegistry';

const root = ReactDOM.createRoot(document.getElementById("app"));
const store = ReducerRegistry._createStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppWeb />
        </Provider>
    </React.StrictMode>
);