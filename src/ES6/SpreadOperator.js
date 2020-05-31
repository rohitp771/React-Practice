import React, { Component } from 'react'

class SpreadOperator extends Component {
    render() {

        let a = ["a","b","c"];
        let b = ["d","e","f"];
        let x = {
            a : 1,
            b: 2,
            c : 3
        };
        let y = {
            d : 4,
            e: 5,
            f : 6
        };

        let z = {...x,...y};

        let string1 = "USA";

        return (
            <>
            <h5> Spread Operator </h5>
            <div>
                <div>Merge two Array {[...a,...b]} using [...a,...b]</div>
                <div>Merge Object Array C: {z.c} -- F:{z.f} using ...x,...y</div>
                <div>Spreaded "USA" to String array - {[...string1]} using [...string1] </div>
            </div>
            </>
        )
    }
}

export default SpreadOperator
