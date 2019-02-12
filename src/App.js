import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserLIst/UserList";
import Header from "./components/Header/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Header">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
        </div></div>
    );
  }
}

export default App;
