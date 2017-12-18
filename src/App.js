import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Katie', age: 28},
      {name: 'Chris', age: 45},
      {name: 'Luna', age: 4},
      {name: 'Beatrice', age: 2}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //DON'T DO THIS! this.state.persons[0].name = 'Katie really loves Chris';
    this.setState({
      persons: [
        {name: 'Katie', age: 34},
        {name: 'Christian', age: 45},
        {name: 'Luna', age: 4},
        {name: 'Beatrice', age: 2}
      ]
    })
  }

  render() {
    return (
      //must use className in jsx
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: working out</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );

    //This is the same as the abve code.
    // The above code is jsx which gets compiled
    //to the code written below
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
