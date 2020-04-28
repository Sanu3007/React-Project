import React from 'react'

const withCounter=(WrappedComponent,incrementnumber)=>{
    class WithCounter extends React.Component
    {
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
                return {count:prevState.count+incrementnumber}
            })
        }

        render()
        {
            console.log(this.props.name)
            return(
                <div>
                    <WrappedComponent 
                     count={this.state.count}
                     IncrementCount={this.IncrementCount}
                     {...this.props}
                     />
                </div>
            )
        }
    }
    return WithCounter
}
export default withCounter;