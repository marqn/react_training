import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
