import React, { Component } from 'react';
import './App.css';
import image from './pokemon.jpeg';

export default class App extends Component {

  // state = {
  //   filterName: '',
  //   submitName: '',
  //   sortAlphabetical: '',
  //   sortAttack: '',
  // }

  // handleNameChange = (e) => {
  //   this.setState({
  //     filterName: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     submitName: this.state.filterName
  //   });
  //   console.log('Submit: ' + this.state.filterName);
  // }

  // handleAlphabeticalChange = (e) => {
  //   this.setState({
  //     sortAlphabetical: e.target.value
  //   });
  //   console.log('ABC: ' + e.target.value);
  // }

  // handleAttackChange = (e) => {
  //   this.setState({
  //     sortAttack: e.target.value
  //   });
  //   console.log('Attack: ' + e.target.value);
  // }

  render() {
    return (
      <div className='home-div'>
        <div className='home-text-div'>
          Go to the Search page to look through the Pokedex and look at all the different Pokemon based on different categories.
        </div>
        <div>
          <img src={image} alt='all the pokemon' className='big-image' />
        </div>  
      </div>
    )
  }
}
