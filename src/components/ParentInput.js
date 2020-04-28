import React,{Component} from 'react'
import Input from './Input'
class ParentInput extends Component
{
    constructor(props)
    {
        super(props)
        this.parentRef=React.createRef()
        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler()
    {
        this.parentRef.current.InputFocus()
    }

    render()
    {
        return(
            <div>
                <Input ref={this.parentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentInput;