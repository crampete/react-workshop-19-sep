import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter"

function App() {
  return (
    <div className="container">
      <Counter caption="My First Counter"/>
      <Counter caption="Cakes Baked"/>
      <Counter caption="Assignments Done"/>
    </div>
  );
}

export default App;
