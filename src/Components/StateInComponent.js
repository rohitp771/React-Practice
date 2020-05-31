import React, { Component } from 'react';


class StateInComponent extends Component{

    constructor(){
        super();
        this.state = {
            userName : null,
            message  : "Welcome Visitor"
        }
    }

    onClickButton(){
        this.setState({
            userName : "Rohit"
        });
    }

    render(){
        return(
            <>
                <div>
                    State Example :<br/>
                    User Name : <span>{this.state.userName}</span><br/>
                    Message   : <span>{this.state.message}</span>
                </div>
                <div>
                    <button onClick={() => this.onClickButton()}>Click Me</button>
                </div>

            </>
        )
    }

}

export default StateInComponent