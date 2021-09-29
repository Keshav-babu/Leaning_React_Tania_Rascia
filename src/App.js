// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api';

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]

//     return (
//       <div className="container">
//         <Table characterData={characters}/>
//       </div>
//     )
//   }
// }


class App extends Component {
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  state ={
    characters:[
      // {
      //   name: 'Charlie',
      //   job: 'Janitor',
      // },
      // {
      //   name: 'Mac',
      //   job: 'Bouncer',
      // },
      // {
      //   name: 'Dee',
      //   job: 'Aspring actress',
      // },
      // {
      //   name: 'Dennis',
      //   job: 'Bartender',
      // },
    ]
  }
 
  
 
  render() {
    const { characters } = this.state
    
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <Api/>
      </div>
    )
  }
}

// class App extends Component {
//   state = {
//     characters: [],
//   }
  
// }
export default App;
