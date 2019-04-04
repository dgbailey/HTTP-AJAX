import React, { Component } from 'react';
import { throws } from 'assert';
import styled, { css } from 'styled-components';
import Portrait from './Portrait';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SBigVanity = styled.div`
  width:100%;
  height:100%;

`

const VanityNav = styled.div`
  height: 50px;
  
  width:100%;
  border-bottom:1px solid lightgray;

`
class BigVanity extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentWillMount(){
        this.setState({data:this.props.portraitData})
    }

    componentWillUpdate(newProps){
        if(this.state.data !== newProps.portraitData){
           this.setState({
               data:newProps.portraitData
           })
        }   

    }

    render(){
    return(
        <SBigVanity>
            <VanityNav></VanityNav>
            <Route path='/friend-list' render={() => <Portrait portraitData={this.state.data} />}></Route>
            
        </SBigVanity>

    )
    }
}

export default BigVanity;