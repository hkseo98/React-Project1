import './App.css';
import React ,{ Component } from 'react'
import Posts from './Posts'
import Server from './Server'
import Form from './Form'
import logo from './logo.svg'
import {BrowserRouter, Route, Switch, Link, NavLink, useParams, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul>
            <li><button type="button" className="posts"><NavLink exact to="/" className="posts">Home</NavLink></button></li>
            <li><button type="button" className="posts"><NavLink to="/posts" className="posts">Posts</NavLink></button></li>
            <li><button type="button" className="posts"><NavLink to="/server" className="posts">Server Side Posts</NavLink></button></li>
            <li><button type="button" className="posts"><NavLink to="/add" className="posts">add</NavLink></button></li>
          </ul>
        </header>
        <Route path='/posts'><Posts /></Route>
        <Route path='/server'><Server /></Route>
        <Route path='/add'><Form /></Route>
      </div>
    );
  }
}

export default App;