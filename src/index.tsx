import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HashRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {store} from './store';


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();