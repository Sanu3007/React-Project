import React from 'react';

import './App.css';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo'
import ParentInput from './components/ParentInput';
import FRParentInput from './components/FRParentInput';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  
  return (
    <div className="App">
      <ClickCounter name="Sanu"/>
      <HoverCounter/>
      {/*<FRParentInput/>
      {/*<ParentInput/>
      {/*<RefDemo/>
     {/*<ParentComp/>*/}
    </div>
  );
}

export default App;
