import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asd32', name: 'Katie', age: 28},
      {id: '12345', name: 'Chris', age: 45},
      {id: 'lkjh', name: 'Luna', age: 4},
      {id: '9090', name: 'Beatrice', age: 2}
    ],
    otherState: 'some other value',
    showPersons: false
  }



  nameChangedHandler = ( event ) => {
    this.setState({
      persons: [
        {name: 'Katie', age: 28},
        {name: 'Chris', age: 45},
        {name: event.target.value, age: 4},
        {name: 'Beatrice', age: 2}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];//SAA just uses ES6 spread
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}

        </div>
      );
    }

    return (
      //must use className in jsx
      //line 37 is considered inefficient
      //use the bind method line 43
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button
           style={style}
           onClick={this.togglePersonsHandler}>Toggle Persons</button>
           {persons}
      </div>
    );

    //This is the same as the abve code.
    // The above code is jsx which gets compiled
    //to the code written below
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
