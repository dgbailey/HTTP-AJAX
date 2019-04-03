import React, { Component } from 'react';

const Friend = (props) =>{
    const setPortrait = props.setPortrait
    return(
        <div className='friend-cont' onClick={() => {setPortrait(props)}}>
            <div className = 'styled-cont'>

                <h3>{props.name}</h3>
                <span className ='prof-icon'></span>
                
            </div>
        </div>
    )
}

export default Friend