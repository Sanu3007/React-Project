import React ,{Component} from 'react'

class Input extends Component
{
    constructor(props)
    {
        super(props)
        this.childRef=React.createRef()
    }

    InputFocus()
    {
        this.childRef.current.focus()
    }
    render()
    {
        return(
            <div>
                <input type='text' ref={this.childRef}/>
            </div>
        )
    }
}

export default Input;