import React from 'react'

function FunctionClick()
{
    function EventHandler()
    {
        console.log('Function Button Clicked')
    }
    return(
        <div>
            <button onClick={EventHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;