import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './src/app/components';
import ReduxRegistry from './src/redux/ReduxRegistry';

const root = ReactDOM.createRoot(document.getElementById("app"));
const store = ReduxRegistry._createStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);