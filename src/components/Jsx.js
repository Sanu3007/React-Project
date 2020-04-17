import React from 'react'

const Hello=()=>{ 
    // Using JSX property
   /* return(
        <div className="dummyClass">
            <h1>Using JSX</h1>
        </div>
    )*/

    // Without using JSX property

    return React.createElement('div',null,React.createElement('h1',null,'Without Using JSX'))
}

export default Hello;