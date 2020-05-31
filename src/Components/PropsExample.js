import React, { Component } from 'react';


class PropsExample extends Component{

    render(){
        return(
            <div>
                Props Example :<br/>
                Prop 1 : <span>{this.props.prop1}</span><br/>
                Prop 1 : <span>{this.props.prop2}</span>
            </div>
        )
    }

}

export default PropsExample