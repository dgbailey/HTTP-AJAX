import React, { Component } from 'react';
import { throws } from 'assert';
import styled, { css } from 'styled-components';

const SPortrait = styled.div`
    height: 300px;

    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;

    border: 1px dashed lightgray;
    border-radius: 5px;
    background:#add8e612;

    .vanity{
        padding: 15px;
        background: #a5a5a4;
        border-radius: 50%;

        
    }

`



class Portrait extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.portraitData
        }
    
    }

    componentDidMount(){
        console.log('portrait')
        this.setState({data:this.props.portraitData})
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