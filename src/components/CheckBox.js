import React ,{Component} from 'react'

class CheckBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            ischecked1:false,
            ischecked2:false
        }

        this.changeStatus=this.changeStatus.bind(this)
    }

    changeStatus(event)
    {
        console.log(event.target.name)
        this.setState({
            [event.target.name]:event.target.checked
        })
            
    }
   render()
   {
       return(
           <form>
               <div>
        
                   <input type='checkbox' 
                          name='ischecked1'
                          checked={this.state.ischecked1}
                          onChange={this.changeStatus} />Fruits<br/>
                   
                   <input type='checkbox' 
                          name='ischecked2'
                          checked={this.state.ischecked2}
                          onChange={this.changeStatus} /> Vegetables<br/>    
               </div>
           </form>
       )
   }

}

export default CheckBox;
