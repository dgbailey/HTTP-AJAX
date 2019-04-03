import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SFriend = styled.div`
    background:#d3d3d340;
    margin:2px;
    display:flex;
    align-items: center;

    &:hover{
        cursor:pointer;
        background:lightgray;
    }

    h3{
        margin-left: 10px;

    }

    
    }
    h3:before{
        content: '';

        margin-right:10px;

        height: 12px;
        
        width: 12px;
        
        background: green;
        
        color: green;
        
       
        
        display: inline-block;
        
        border-radius: 50%;
    }

`

const Friend = (props) =>{
    const setPortrait = props.setPortrait
    return(
        <SFriend onClick={() => {setPortrait(props)}}>
            <div className = 'styled-cont'>

                <h3>{props.name}</h3>
                <span className ='prof-icon'></span>
                
            </div>
        </SFriend>
    )
}


export default Friend