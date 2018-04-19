import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { WordManagerPage } from './pages/WordManagerPage';

class App extends React.Component {
  public render() {
    return (
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <a className="navbar-brand" href="#">SaveMinder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/learn">Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/wordmanager">Word manager</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/learn" component={LearnPage} />
                <Route path="/wordmanager" component={WordManagerPage} />
              </Switch>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
