import React, { Component } from 'react'

class ListRendering extends Component {
 
    render() {
        const names = ["Rohit","Ramesh", "Pawar"];
        let nameList = names.map(name => <div> {name} </div>)   ;
        return (<div>Here are the Names ; <br/>{nameList}</div>
        )
    }
}

export default ListRendering
