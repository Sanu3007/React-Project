import React ,{Component} from 'react'
class Welcome extends Component{
    render(){
    return (
        <div> 
            <h1>Welcome {this.props.person.name}</h1>
            <h1>I am {this.props.person.age} years old</h1>
            {this.props.children}
        </div>
        )   
    }

}

export default Welcome;