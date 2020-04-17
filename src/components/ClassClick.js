import React ,{Component} from 'react'
class ClassClick extends Component
{
     EventHandler()
    {
        console.log('Class Button Clicked')
    }
    render()
    {
        return(
            <div>
                <button onClick={this.EventHandler}>Click Me</button>
            </div>
        )
    }

}
export default ClassClick;