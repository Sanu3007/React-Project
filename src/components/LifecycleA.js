import React ,{Component} from 'react'
import LifecycleB from './LifecycleB'
 class LifecycleA extends Component
 {
     constructor(props)
     {
         super(props)
         this.state={
             name:'Sanu'
         }
         console.log('LifecycleA Constructor')
     }

     static getDerivedStateFromProps(props,state)
     {
         console.log('LifecycleA getDerivedStateFromProps')
         return null;
     }

     componentDidMount()
     {
         console.log('lifecycleA componentDidMount')
     }
     render()
     {
         console.log('LifecycleA render')
         return(
            <div>
                <h1>LifeCycleA</h1>
                <LifecycleB/>
            </div>
         )
     }
 }

 export default LifecycleA;