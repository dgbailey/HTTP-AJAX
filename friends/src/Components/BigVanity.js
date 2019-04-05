import React, { Component } from 'react';
import { throws } from 'assert';
import styled, { css } from 'styled-components';
import Portrait from './Portrait';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './Form';
import UpdateForm from './UpdateForm';

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
            data:[],
            location:''
        }
    }

    componentWillMount(){
        console.log('big vanity mounted')
        this.setState({data:this.props.portraitData})
    }

    componentWillUpdate(newProps){
        console.log('new',newProps)
        console.log('old',this.state.data)
        console.log('update running');
        if(this.state.data !== newProps.portraitData){
           this.setState({
               data:newProps.portraitData

           })
        }

    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //       console.log("here");
    //       //take action here
    //     }
    //   }

    render(){
        console.log('big vanity render')
    return(
        <SBigVanity>
            <VanityNav></VanityNav>
            <Route exact path='/friend-list' render={() => <Portrait portraitData={this.state.data} />}></Route>
            <Route exact path='/friend-list/friend-form' render={() => <Form {...this.props}/>}></Route>
            <Route path='/friend-list/update-friend-form' render={() => <UpdateForm {...this.props}/>}></Route>
        </SBigVanity>

    )
    }
}

export default BigVanity;