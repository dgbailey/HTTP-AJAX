import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';
import Portrait from './Portrait';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './Form';
const SCompendium = styled.section`
    padding:5px;
    display:flex;
   flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family: 'Lato', sans-serif;
`


const SFriendListCont = styled.div`
    width:100%
    height:200px;
    overflow:scroll;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    z-index:2;
    font-size:13px;
    font-weight:600;
    color:#adaaaa;
   
    h4{
        

        border-radius: 5px;
        
        background: #b0e6ba;
        
        margin: 20px 0px 0px;
        
        color: green;
        
    }

`
const AddForm = styled.form`
    border:none;
    
    z-index:2;
    
   
   .section-title{
      margin:0px;
    font-weight:500;
    color:lightgray;   
    
    }


    input{
        background: #120044;

        border-radius: 5px;
        
        height: 30px;
        
        color: white;
        
        font-weight: 600;
        
        text-align: left;
        
        margin-bottom: 10px;
        
        padding-left: 10px;
        
        border: 1px solid #270042;

        
    }

    .category{
        display:flex;
        justify-content:space-between;
    }

    .addBtn{
        
        a{
            opacity:.85;
            color:#d3d3d3ad;
        }

        a:hover{
            cursor:pointer;
            opacity:1;

        }
    
    }

`


class FriendList extends Component {
    constructor(){
        super();
        this.state = {
            friendData :[],
            // portraitData:{name:'no friend',
            // age:'select friend',email:'select user'}
        }

    }

    componentDidMount(){
        console.log('friends list did mount')
        axios.get('http://localhost:5000/friends')
        .then(res => {console.log(res.data);
                        this.setState({friendData:res.data})})
        .catch(err => {console.log(err)})
    }

    componentWillReceiveProps(newProps){
        console.log('old',this.props)
        console.log('updated friendlust',newProps)
        if(this.state.friendData !== newProps.friendData){
           this.setState({
               friendData:newProps.friendData

           })
        }

    }
    

    render(){
        console.log('friends list rendering')
        if(!this.state.friendData){
            return(
                '...Loading'
            )
        }
        return (
            <SCompendium>
                
                <AddForm>
                    
                    <input placeholder='search friend...'></input>
                        <section className='category friends'>
                            <h4 className='section-title'>Friends</h4>
                            <span className='addBtn'>
                               
                                   <Link to='friend-list/friend-form'><i class="fas fa-plus-circle"></i></Link> 
                                   
                            </span>
                        </section>
                </AddForm>
                <SFriendListCont>
                    
                    {this.state.friendData.map(
                        friendDataValue => 
                        <Friend 
                        key={friendDataValue.id} 
                        // age={friendDataValue.age} 
                        name={friendDataValue.name} 
                        email={friendDataValue.email}
                        setPortrait={this.props.setPortrait}/>)
                    }
                
                </SFriendListCont>
                {/* <div className='portrait-cont'>
                    
                    <Portrait portraitData={this.state.portraitData}/>
                </div> */}
            </SCompendium>
        )
    }
}

export default FriendList;