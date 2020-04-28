import React ,{Component} from 'react'
 class RefDemo extends Component
 {
     constructor(props)
     {
         super(props)
         this.inputRef=React.createRef()
         this.CbRef=null
         this.setCbRef=element=>{
            this.CbRef=element
         }
         this.clickHandler=this.clickHandler.bind(this)
     }
     componentDidMount()
        {
            if(this.setCbRef)
                this.CbRef.focus()
            //this.inputRef.current.focus()
            //console.log(this.inputRef)
        }
     
     clickHandler()
     {
         alert(`UserName is ${this.CbRef.value}`)
         //alert(`UserName is ${this.inputRef.current.value}`)
     }   
     render()
     {
         return(
             <div>
                {/* UserName <input type='text' ref={this.inputRef}/><br/> */}
                UserName <input type='text' ref={this.setCbRef}/><br/>  
                 <button onClick={this.clickHandler}>Submit</button>
             </div>
         )
     }
 }

 export default RefDemo;