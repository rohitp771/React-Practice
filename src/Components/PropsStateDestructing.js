import React, { Component } from 'react'

export class PropsStateDestructing extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        const {username,password} = this.props;
        return (
            <div>
                UserName : {username} / {password}
            </div>
        )
    }
}

export default PropsStateDestructing
