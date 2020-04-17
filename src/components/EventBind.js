import React ,{Component} from 'react'

class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state=({
            message:'Hello'
        })
        //this.ClickHandler=this.ClickHandler.bind(this)
    }
   // ClickHandler()
   // {
   //     this.setState({
   //         message:'GoodBye!'
    //    })
   // }

   ClickHandler=()=>{
       this.setState({
           message:'GoodBye!'
       })
   }
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
        {/* <button onClick={()=>this.ClickHandler()}>Click Me</button> */}
            <button onClick={this.ClickHandler}>Click Me</button>
            </div>
        )
    }
}
export default EventBind;