import React, { Component } from 'react'

class HoverCounter2 extends Component {
   

    render() {
        const {count,IncrementCount}=this.props
        return (
            <div>
                <h1 onMouseOver={IncrementCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter2
