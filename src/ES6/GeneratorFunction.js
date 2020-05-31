import React, { Component } from 'react';
import infiniteNumber from './infiniteNumber'

class GeneratorFunction extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }



    render() {
        let number = infiniteNumber();
        return (
            <>
            <h3>Generator Function *increamentNumber and yield</h3>
            <div>
                <h1> First call {number.next().value}</h1>
            </div>

            <div>
                <h1> Second call {number.next().value}</h1>
            </div>

            <div>
                <h1> Third call {number.next().value}</h1>
            </div>

            </>
        )
    }
}

export default GeneratorFunction
