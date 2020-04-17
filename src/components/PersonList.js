import React from 'react'

function PersonList({persons})
{
    return(
     <h1>I am {persons.name} and {persons.age} years old</h1>
    )
}
export default PersonList;