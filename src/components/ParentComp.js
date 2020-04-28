import React ,{Component} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'Sanu'
        }
    }

    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'Sanu'
            })
        },1000)
    }
    render()
    {
        console.log('-----Parent Component------')
        return(
            <div>
                
                ParentComponent {this.state.name}
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
               
            </div>
        )
        
    }
}

export default ParentComp;