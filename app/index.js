import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import routes from './routes';
import configureStore from './lib/configureStore';
import './assets/scss/main.scss';

const state = window.__STATE__;
const MOUNT_NODE = document.getElementById('app');
const store = configureStore(state, false);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>,
    MOUNT_NODE);

if (process.env.NODE_ENV !== 'production') {
    require('preact/devtools')
};