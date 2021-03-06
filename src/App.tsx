import * as React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/HomePage';
import {LearnPage} from './pages/learnPages/LearnPage';
import {WordManagerPage} from './pages/wordManagerPages/WordManagerPage';
import {SignIn} from './pages/login/SignIn';
import {SignUp} from './pages/login/SignUp';
import {SelectGamePage} from "./pages/learnPages/SelectGamePage";
import CategoryPage from "./pages/wordManagerPages/input_category/CategoryPage";


class App extends React.Component<{}> {

    public render() {
        return (
            <div className="App">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/" activeStyle={{fontWeight: 'bold'}} exact
                                         className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/selectGame" activeStyle={{fontWeight: 'bold'}}
                                         className="nav-link">Learn</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/wordmanager" activeStyle={{fontWeight: 'bold'}} className="nav-link">Word
                                    manager</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand" href="#">SaveMinder</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/signin" activeStyle={{fontWeight: 'bold'}} className="nav-link">Sign
                                    in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" activeStyle={{fontWeight: 'bold'}} className="nav-link">Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route path="/" component={HomePage} exact={true}/>
                                <Route path="/selectGame" component={SelectGamePage}/>
                                <Route path="/learn" component={LearnPage}/>
                                <Route path="/wordmanager" component={WordManagerPage}/>
                                <Route path="/categoryPage" component={CategoryPage}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signup" component={SignUp}/>
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
