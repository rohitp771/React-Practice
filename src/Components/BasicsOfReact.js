import React, { Component } from 'react';
import Greet from './Greet';
import Welcome from './Welcome';
import JSXExample from './JSXExample';
import WithoutJSX from './WithoutJSX';
import PropsExample from './PropsExample';
import PropsInFunctionComponent from'./PropsInFunctionComponent';
import StateInComponent from'./StateInComponent';

export class BasicsOfReact extends Component {
    render() {
        return (
            <div>
                <Greet/>
                <Welcome/>
                <JSXExample/>
                <WithoutJSX/>
                <PropsExample prop1="Rohit" prop2="Pawar"/>
                <PropsInFunctionComponent userName="Rohit"/>
                <StateInComponent/>
            </div>
        )
    }
}

export default BasicsOfReact
