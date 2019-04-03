import React, { Component } from 'react';
import { throws } from 'assert';
import styled, { css } from 'styled-components';

const SPortrait = styled.div`
    height: 100%;

    width: 300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;

    


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