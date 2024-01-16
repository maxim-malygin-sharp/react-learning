import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import About from "./About";import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

class Login extends Component{
  render(){
    return (
      <span>Login page</span>
    );
  }
}

class Main extends Component{
  render(){
    return (
      <span>Main page</span>
    );
  }
}

class About extends Component{
  render(){
    return (
      <span>About page</span>
    );
  }
}