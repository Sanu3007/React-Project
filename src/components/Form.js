import React ,{Component} from 'react'

class Form extends Component{
       
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            course:'react'   
        }
        this.changeCourse=this.changeCourse.bind(this)
        this.changeSubmit=this.changeSubmit.bind(this)
    }
    changeUserName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changeCourse(event)
    {
        this.setState({
            course:event.target.value
        })
    }

    changeSubmit(event)
    {
        alert(`Username is ${this.state.username} and Course chosen is ${this.state.course}`)
        event.preventDefault()
    }
   
 render()
 {
     return(
        <form onSubmit={this.changeSubmit}>
            <div>
                <label>UserName </label>
                <input type='text' value={this.state.username} onChange={this.changeUserName}/>
            </div>
            <div>
                <label>Courses</label>
                <select value={this.state.course} onChange={this.changeCourse}>
                    <option value='php'>PHP</option>
                    <option value='mysql'>MYSQL</option>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                </select>
            </div>
                <input type='submit' value='Submit'/>
            

        </form>
     )
 }
}
 export default Form;