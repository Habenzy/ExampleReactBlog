import React from 'react';
import './App.css';
import Header from './Header';
import Clock from './Clock';

function App(props) {

  let ids = ['1', '2', '3', '4', '5']

  return (
    <div className="App">
      <Clock />
      <h1>{props.greeting}</h1>

      {ids.map((id) => {
        return <Header someKey='some value' userId={id} key={id}/>
      })}

    </div>
  );
}

export default App;
