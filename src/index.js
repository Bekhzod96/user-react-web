import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import dotenv from "dotenv";

dotenv.config();

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));


