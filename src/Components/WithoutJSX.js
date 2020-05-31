import React from 'react';
const WithoutJSX = (props) => {
    return React.createElement("div",
            {className:"parentDiv"},React.createElement(
                            "h5",
                            {
                                className:"childElement"
                            },
                            "WithoutJSX Child Using"
                            )
            );
};

export default WithoutJSX