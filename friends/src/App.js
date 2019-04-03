import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendList from './Components/FriendList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="page-header">friends</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/friend-list">my friends</Link>
          </div>
        </nav>
          
        
        <Route path='/friend-list' component={FriendList}></Route>
      </div>
    );
  }
}

export default App;
