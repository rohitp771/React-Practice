import React, { Component } from 'react'

class ClosureComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.closureFunction= this.closureFunction.bind(this);
    }
    
    //function returns function
    closureFunction(){
        var a = 10;
        let newFn = function(){
            console.log(a);
            return a++;    
        }
        return newFn;
    }
    
    render() {
        debugger
        let fnObj = this.closureFunction()
        fnObj();
        fnObj();
        fnObj();

        return (
            <div>
                
            </div>
        )
    }
}

export default ClosureComponent
