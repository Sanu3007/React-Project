import React from 'react';

import './App.css';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import RenderProps from './components/RenderProps';

function App() {
  
  return (
    <div className="App">
      <RenderProps 
          render={(count,IncrementCount)=>(
                    <ClickCounter2 count={count}
                     IncrementCount={IncrementCount} />
                     )}
                     />

      <RenderProps 
          render={(count,IncrementCount)=>(
                    <HoverCounter2 count={count}
                     IncrementCount={IncrementCount} />
                     )}
                     />              
      {/*<ClickCounter2/>
      <HoverCounter2/>
      <User name={(istrue)=>istrue ?"Sanu":"Guest"}/>*/}
    </div>
  );
}

export default App;
