import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    //Always use callback if want to use afterstate update
    //for prev value use arrow function to setState
    onClickIncrement(){
       this.setState((prevState) =>({
           count : prevState.count + 1
    }))
    }
    
    render() {
        return (
            <div>
                <div>Count -  {this.state.count}  </div>
                <button onClick={() => this.onClickIncrement()}>Counter(Check COnsole)</button>
            </div>
        )
    }
}

export default Counter
