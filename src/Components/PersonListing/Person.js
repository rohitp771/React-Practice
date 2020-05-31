import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <h4>I am {this.props.person.name}, and i am {this.props.person.age} years of age.</h4>
        )
    }
}

export default Person