import React,{Component} from 'react'
import FRInput from './FRInput'
class FRParentInput extends Component
{
    constructor(props)
    {
        super(props)
        this.inputRef=React.createRef()
        this.clickHandler=this.clickHandler.bind(this)
        //this.doubleclickHandler=this.doubleclickHandler.bind(this)
    }

    clickHandler()
    {
        this.inputRef.current.focus()
    }

    //doubleclickHandler()
    //{
    //    alert(`String entered is${this.inputRef.current.value}`)
    //}

    render()
    {
        return(
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus On Input</button>
               {/*} <button  onClick={this.doubleClickHandler}>View Content</button>*/}
            </div>
        )
    }
}

export default FRParentInput;