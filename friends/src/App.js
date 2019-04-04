import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendList from './Components/FriendList';
import styled, { css } from 'styled-components';
import Portrait from './Components/Portrait';
import BigVanity from './Components/BigVanity';
import Form from './Components/Form';

import axios from 'axios';

const SApp = styled.div`
  height:auto;
  margin:30px auto;
  width:600px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
  border-radius: 10px;

  
  overflow:hidden;
  position:relative;
  display:flex;
  flex-direction:row;
  -webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;

  .playdiv{
    position: absolute;
    background: #460065;
    width: 100%;
    top: 0;
    height:100%;
    left: 0;
  
  }

`

const SNav = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding: 10px 10px 20px;
  color:white;
  height:30px;
  
  
  .page-header{
    font-family: 'Roboto', sans-serif;
    font-size:37px;
  }
  

  h1{
    width:auto;
    z-index:2;
    
  }
  .nav-links{
    margin-left: 16px;
    color:white;
    z-index:2;
    display:flex;
    justify-content:space-around;
    a:hover{
      color:purple;
      
    }
    a{
      color:lightgray;
    }
    
  }
  a{
    margin:5px;
    
    color:white;
    text-decoration:none;
    font-weight: 800;
    
  }

  
`
const BGdiv = styled.div`
  height:50px;
  position:absolute;
  background:red;
  
`


const Sidebar = styled.section`
  width:250px;s
  padding:5px;

  position: relative;
`
const VanityNav = styled.div`
  height: 50px;
  
  width:100%;
  border-bottom:1px solid lightgray;

`

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendData :[],
      portraitData:{name:'no friend selected',
      }
  }

  }
  setPortrait = (friendPropsObject) => {
    console.log('setportrait firing')
    this.setState({portraitData:friendPropsObject})

  }

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friendData: res.data });
        console.log(res);
        // redirect
        // this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUpdate(newProps){
    console.log('new app',newProps)
    // if(this.state.friendData !== newProps){
    //    this.setState({
    //        friendData:newState.friendData

    //    })
    // }

  }

  
  render() {
    console.log('app rendering')
    return (
      
      <SApp>
        <Sidebar>
        <div className='playdiv'></div>
          <SNav>
            
              <h1 className="page-header">ajax</h1>
              
              <div className="nav-links">
                <Link to="/"><i class="fas fa-home"></i></Link>
                <Link to="/friend-list"><i class="fas fa-user-friends"></i></Link>
                
              </div>
          </SNav>
          <Route path='/friend-list' render={(props) => <FriendList {...props} friendData={this.state.friendData} setPortrait={this.setPortrait} />}></Route>
        </Sidebar>
        <Route path='/friend-list' render={(props) => <BigVanity {...props}  addFriend={this.addFriend} portraitData={this.state.portraitData}/>}></Route>
        
          
  
      </SApp>
    );
  }
}

export default App;
