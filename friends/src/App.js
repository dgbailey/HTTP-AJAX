import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendList from './Components/FriendList';
import styled, { css } from 'styled-components';

const SApp = styled.div`
  height:auto;
  margin:30px auto;
  width:600px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
  border-radius: 10px;
  
  overflow:hidden;
  position:relative;
`

const SNav = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:15px;
  color:white;

  h1{
    width:auto;
    z-index:2;
  }
  .nav-links{
    color:white;
    z-index:2;
  }
  a{
    margin:5px;
    padding:10px;
    color:white;
    text-decoration:none;
    font-weight: 800;
    
  }

  .playdiv{
    position: absolute;
    background: #460065;
    width: 100%;
    top: 0;
    height: 100px;
    left: 0;
  
  }
`
const BGdiv = styled.div`
  height:50px;
  position:absolute;
  background:red;
  
`

class App extends Component {
  render() {
    return (
      <SApp>
        
        <SNav>
          <div className='playdiv'></div>
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
