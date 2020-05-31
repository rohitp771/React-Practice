import React, { Component } from 'react';
import Person from './Person';

export class PersonListing extends Component {

    constructor(props) {
        super(props)
        this.state = {
             personsList : [{
                 name : "Rohit",
                 age  : 10
             },
             {
                name : "Ramesh",
                age  : 20
            }]
        }
    }
    
    render() {
        const personsList = this.state.personsList.map(personDetail=> <Person person={personDetail}/>)
        return (<div><br/>----------------List Rendering----------------<br/>{personsList}</div>)
    }
}

export default PersonListing
