import React, { Component } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';


const SForm = styled.div`

    height: 300px;

    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;

    border: 1px dashed lightgray;
    border-radius: 5px;
    background:#add8e612;




`



class UpdateForm extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            friend: {
                name: '',
                email: '',
                id:this.props.portraitData.id
            }

        }
    };
  
    
    changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
  
      this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [ev.target.name]: value,
          id:this.props.portraitData.id,
          age:22
        }
      }));
    };
    
    handleSubmit = e => {
      e.preventDefault();
      
      this.props.updateFriend(this.state.friend);
  
      this.setState({
        friend: {
          name: '',
          email:''
        }
      });


    };
  
    render() {
        console.log('form rendering')
      return (
        <SForm>
          <h2>{`Update ${this.props.portraitData.name}`}</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="string"
              name="name"
              onChange={this.changeHandler}
              placeholder="name"
              value={this.state.friend.name}
            />
            <div className="baseline" />
  
            <input
              type="string"
              name="email"
              onChange={this.changeHandler}
              placeholder="Email"
              value={this.state.friend.email}
            />
            <div className="baseline" />
  
          
  
            <button className="md-button form-button">Add Friend</button>
          </form>
        </SForm>
      );
    }
  }
  
  export default UpdateForm;