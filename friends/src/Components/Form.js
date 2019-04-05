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

    input{
        margin: 3px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid lightgray;
        font-size: revert;
        font-size:20px;
        padding-left:5px;
    
    }

    button{
        border: 1px solid gray;

        background: none;

        padding: 13px 25px;

        border-radius: 5px;

        font-size: 15px;

        margin-top: 10px;

        color: black;

        font-weight: 600;

        &:hover{
            cursor:pointer;
            opacity:.9;
        }
        &.delete{
            background:lightgray;
        }
    }

`
const BtnBox = styled.div`

        width:198px;
        display:flex;
        justify-content:space-between;
        margin:0px auto;



`



class Form extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            friend: {
                name: '',
                email: ''
                
            }

        }
    };
  
    changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
  
      this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [ev.target.name]: value
        }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.addFriend(this.state.friend);
  
      this.setState({
        friend: {
          name: '',
          email:''
        }
      });

      this.props.history.push('/friend-list');

    };
  
    render() {
        console.log('form rendering')
      return (
        <SForm>
          <h2>Add New Friend</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="string"
              name="name"
              onChange={this.changeHandler}
              placeholder="Name"
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
  
          
            <BtnBox>
                <button className="add">Add</button>
                <button className="delete">Delete</button>
            </BtnBox>
          </form>
        </SForm>
      );
    }
  }
  
  export default Form;