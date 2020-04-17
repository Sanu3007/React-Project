import React from 'react'
import PersonList from './PersonList'
function ListRender()
{
    const person=[{name:'Sanu',age:20},{name:'Shubham',age:18},{name:'Sumit',age:20},{name:'Amit',age:18}]
    const personName=person.filter(t=>t.age===18).map(t=><h1>{t.name}</h1>)

    //const personName=person.map(persons=><PersonList persons={persons}/>)
    return(
        <div>
            {personName}
        </div>
    )
}

export default ListRender;