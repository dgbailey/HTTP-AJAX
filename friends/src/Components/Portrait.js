import React, { Component } from 'react';
import { throws } from 'assert';



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

    // componentWillUpdate(prevState){
    //     if(this.state !== prevState){
    //         this.setState({data:this.state})
    //     }

    // }
    render(){
        console.log('portrait rendering')
        return(
            <div className='portrait'>
                <div className='style-box'>
                    <span className='vanity'></span>
                    <h3>{this.state.data.name}</h3>
                    <span className ='prof-icon'></span>
                    <span className = 'age'>{this.state.data.age}</span>
                    <span className = 'age'>{this.state.data.email}</span>
                </div>
            </div>
        )
    }
}

export default Portrait;