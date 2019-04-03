import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';
import Portrait from './Portrait';
import styled, { css } from 'styled-components';


const SCompendium = styled.section`
    padding:5px;
    display:flex;
   
    align-items:center;
    justify-content:space-around;
   
`


const SFriendListCont = styled.div`
    width:200px;
    height:300px;
    overflow:scroll;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;

   
    h4{
        padding: 10px;

        border-radius: 5px;
        
        background: #b0e6ba;
        
        margin: 20px 0px 0px;
        
        color: green;
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
                
                
                <SFriendListCont>
                    <h4>Active</h4>
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
                <div className='portrait-cont'>
                    
                    <Portrait portraitData={this.state.portraitData}/>
                </div>
            </SCompendium>
        )
    }
}

export default FriendList;