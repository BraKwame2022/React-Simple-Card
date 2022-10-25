import React, { Component } from 'react'
import '../App.css'

class Descreption extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='details'>
                <h3>Codetrain is a 12 month course that transforms people from any background into {this.props.career} and full-stack web developers, and assists them to launch</h3>            
            </div>
        )
    }
}

export default Descreption;
