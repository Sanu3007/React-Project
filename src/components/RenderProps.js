import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 count:0
        }
        this.IncrementCount=this.IncrementCount.bind(this)
    }

    IncrementCount()
    {
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.IncrementCount)}
            </div>
        )
    }
}

export default RenderProps
