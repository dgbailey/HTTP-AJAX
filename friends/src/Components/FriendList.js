import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';
import Portrait from './Portrait';
import styled, { css } from 'styled-components';


const SCompendium = styled.section`
    padding:5px;
    display:flex;
   flex-direction:column;
    align-items:center;
    justify-content:space-around;
   
`


const SFriendListCont = styled.div`
    width:175px;
    height:300px;
    overflow:scroll;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    z-index:2;
    font-size:12px;
    color:white;
   
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
    margin-bottom:10px;
    width:175px;
   


    input{
        border:none;
        background:#170054;
        border-radius:5px;
        width:100%;
        height:30px;
        color:white;
        font-weight:800;
        text-align:left;
        
    }


`


class FriendList extends Component {
    constructor(){
        super();
        this.state = {
            friendData :[],
            portraitData:{name:'no friend',
            age:'select friend',email:'select user'}
        }

    }

    componentDidMount(){
        console.log('friends list did mount')
        axios.get('http://localhost:5000/friends')
        .then(res => {console.log(res.data);
                        this.setState({friendData:res.data})})
        .catch(err => {console.log(err)})
    }

    setPortrait = (friendPropsObject) => {
        console.log('setportrait firing')
        this.setState({portraitData:friendPropsObject})

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
                    <input placeholder='add friend'></input>
                </AddForm>
                <SFriendListCont>
                    
                    {this.state.friendData.map(
                        friendDataValue => 
                        <Friend 
                        key={friendDataValue.id} 
                        age={friendDataValue.age} 
                        name={friendDataValue.name} 
                        email={friendDataValue.email}
                        setPortrait={this.setPortrait}/>)
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