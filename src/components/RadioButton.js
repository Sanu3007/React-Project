import React ,{Component} from 'react'
 
class RadioButton extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            ischecked:'male'
        }

        this.changeStatus=this.changeStatus.bind(this)
    }

    changeStatus(event)
    {
        //console.log(event.target.name)
        this.setState({
         ischecked:event.target.value

         })
    }
    render()
    {
        return(
            <form>
                <div>
                    <label>Gender</label><br/>
                    <input type='radio'
                           value='male'
                           //name='ischecked'
                           checked={this.state.ischecked==='male'}
                           onChange={this.state.changeStatus}/>Male<br/>

                     <input type='radio'
                            value='female'
                            //name='ischecked'
                           
                           checked={this.state.ischecked==='female'}
                           onChange={this.state.changeStatus}/>Female<br/>      
                </div>
            </form>
        )
    }
}

export default RadioButton;