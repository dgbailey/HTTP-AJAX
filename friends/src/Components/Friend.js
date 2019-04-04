import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SFriend = styled.div`
   
    display:flex;
    align-items: center;
    border-radius:5px;
    &:hover{
        cursor:pointer;
        background:#2a165f9e;
    }

    h3{
        margin-left: 10px;

    }

    
    }
    h3:before{
        content: '';

        margin-right:10px;

        height: 8px;
        
        width: 8px;
        
        background: green;
        
        color: green;
        
       
        
        display: inline-block;
        
        border-radius: 50%;
    }

    .styled-cont{
        height:34px;
        display:flex;
        align-items:center;
        
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