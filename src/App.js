import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Jsx'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ListRender from './components/ListRender'

function App() {
  const p1={name:"Sanu",age:20};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Welcome To React World
          <ListRender/>
          {/*<ParentComponent/>
          {/*<EventBind/>*/}
           {/*<FunctionClick/> 
           <ClassClick/>*/} 
          {/*<Counter/>/*}
          {/*<Greet name="Sanu"/> 
          <Greet name="Sumit"/> 
          <Welcome person={p1} >
            <p> This is a children </p>
          </Welcome>
          {/*<Hello/>*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
