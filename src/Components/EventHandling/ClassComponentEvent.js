import React, { Component } from 'react'

class ClassComponentEvent extends Component {

    clickHandler(){
        alert("Class Component Click")
    }

    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Class Click Me</button> 
            </div>
        )
    }
}

export default ClassComponentEvent
