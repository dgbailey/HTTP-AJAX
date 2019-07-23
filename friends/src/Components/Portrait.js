import React, { Component } from 'react';
import { throws } from 'assert';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SPortrait = styled.div`
    height: 300px;

    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    position:relative;
    border: 1px dashed lightgray;
    border-radius: 5px;
    background:#add8e612;

    .edit{
        position: absolute;

        top: 0;

        right: 0;

        font-size: 30px;

        color: lightgray;

        margin: 5px;

        &:hover{
            cursor:pointer;
            color:gray;
        }
    }
    .vanity{
        padding: 15px;
        background: #a5a5a4;
        border-radius: 50%;

        }
    }

`



class Portrait extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    
    }

    updatePortraitNewUser(user){
        this.setState({data:user})
    }
    
    componentDidMount(){
        console.log('portrait mounting')
        this.setState({data:this.props.portraitData})
        console.log('portrait props', this.state.data)
    }

    componentWillUpdate(newProps){
        if(this.props.portraitData !== newProps.portraitData){
           this.setState({
               data:newProps.portraitData
           })
        }   

    }
    render(){
        console.log('portrait rendering')
        return(
            <SPortrait>
                <div className='style-box'>
                    <Link to='/friend-list/update-friend-form'><div className='edit'><i class="far fa-edit"></i></div></Link>
                    <span className='vanity'><i class="fas fa-users"></i></span>
                    <h3>{this.state.data.name}</h3>
                    <span className ='prof-icon'></span>
                    <span className = 'age'>{this.state.data.age}</span>
                    <span className = 'age'>{this.state.data.email}</span>
                </div>
            </SPortrait>
        )
    }
}

export default Portrait;