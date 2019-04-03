import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';
import Portrait from './Portrait';


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
            <section className='friend-compendium'>
                <div className = 'friend-list-cont'>
                    {this.state.friendData.map(
                        friendDataValue => 
                        <Friend 
                        key={friendDataValue.id} 
                        age={friendDataValue.age} 
                        name={friendDataValue.name} 
                        email={friendDataValue.email}
                        setPortrait={this.setPortrait}/>)
                    }
                
                </div>
                <div className='portrait-cont'>
                    <h1>Portrait</h1>
                    <Portrait portraitData={this.state.portraitData}/>
                </div>
            </section>
        )
    }
}

export default FriendList;