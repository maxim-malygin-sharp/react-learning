import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
0
import Login from "./Login";
import Main from "./Main";
import About from "./About";
import './App.css';
import TodoListMain from './mobX/todoList'

function DataProvider({ children }) {
  const data = /* fetch data somehow: state, derive from props, … */
  const props = { data }

  return React.isValidElement(children)
    ? React.cloneElement(children, props)  // element as children
    : React.createElement(children, props) // component as children
}
const DataRenderer = ({ data }) => data.map(i => <li key={i.id}>{i.value}</li>)

class Renderer extends Component {
  render() {
    return (
<DataProvider>
  <DataRenderer />
</DataProvider>
    )
  }
}

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
            <li><NavLink to="/renderer">Renderer</NavLink></li>
            <li><NavLink to="/todo">Todo</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/app" component={App1}/>
            <Route path="/renderer" component={Renderer}/>
            <Route path="/todo" component={TodoListMain}/>
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