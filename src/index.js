import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import register from "./components/Register/Register"


class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={register} />
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));


