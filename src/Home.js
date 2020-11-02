import React, { Component } from 'react';
import './App.css';
import image from './pokemon.jpeg';

export default class App extends Component {

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
