import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendList from './Components/FriendList';
import styled, { css } from 'styled-components';

const SApp = styled.div`
  height:auto;
  margin:0px auto;
  width:600px;
`

const SNav = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  h1{
    width:auto;
  }

`

class App extends Component {
  render() {
    return (
      <SApp>
        <SNav>
          <h1 className="page-header">friends</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/friend-list">my friends</Link>
          </div>
        </SNav>
          
        
        <Route path='/friend-list' component={FriendList}></Route>
      </SApp>
    );
  }
}

export default App;
