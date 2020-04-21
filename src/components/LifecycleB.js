import React ,{Component} from 'react'
 class LifecycleB extends Component
 {
     constructor(props)
     {
         super(props)
         this.state={
             name:'Sanu'
         }
         console.log('LifecycleB Constructor')
     }

     static getDerivedStateFromProps(props,state)
     {
         console.log('LifecycleB getDerivedStateFromProps')
         return null;
     }

     componentDidMount()
     {
         console.log('lifecycleB componentDidMount')
     }
     render()
     {
         console.log('LifecycleB render')
         return(
            <div>
                <h1>LifeCycleB</h1>
            </div>
         )
     }
 }

 export default LifecycleB;