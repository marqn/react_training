import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { WordManagerPage } from './pages/WordManagerPage';
import { WordItem } from './WordItem';

interface State {
  words: WordItem[]
}

class App extends React.Component<{}, State> {

  state: State = {
    words: []
  }

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
              <li className="nav-item">
                <NavLink to="/" activeStyle={{ fontWeight: 'bold' }} exact className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/learn" activeStyle={{ fontWeight: 'bold' }} className="nav-link">Learn</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wordmanager" activeStyle={{ fontWeight: 'bold' }} className="nav-link">Word manager</NavLink>
              </li>

            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" component={HomePage} exact={true} />
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

window['app'] = App;

export default App;
