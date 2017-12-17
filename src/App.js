import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //must use className in jsx
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Katie" age="28">My hobbies: working out</Person>
        <Person name="Chris" age="45"/>
        <Person name="Luna" age="4"/>
        <Person name="Beatrice" age="2"/>
      </div>
    );

    //This is the same as the abve code.
    // The above code is jsx which gets compiled
    //to the code written below
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
