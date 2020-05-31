import React from 'react';

function FunctionalComponentEvent(){

        function clickHandler() {
            alert("Functional Component Cliked")
        }

        return (
            <div>
               <button onClick={clickHandler}>Function Click</button> 
            </div>
        )
    
}

export default FunctionalComponentEvent
