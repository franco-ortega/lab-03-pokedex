import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import data from './Data.js';

export default class App extends Component {

  state = {
    filterName: '',
    submitName: '',
    sortAlphabetical: '',
    sortType: '',
  }

  handleNameChange = (e) => {
    this.setState({
      filterName: e.target.value
    });
//    console.log('Name: ' + e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitName: this.state.filterName
    });
    console.log('Submit: ' + this.state.filterName);
  }



  handleAlphabeticalChange = (e) => {
    this.setState({
      sortAlphabetical: e.target.value
    });
    console.log('ABC: ' + e.target.value);
  }

  handleTypeChange = (e) => {
    this.setState({
      sortType: e.target.value
    });
    console.log('Type: ' + e.target.value);
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className='body-div'>
          <div className='sidebar-div'>
            <SearchBar
            filterName={this.state.filterName}
            submitName={this.state.submitName}
            handleNameChange={this.handleNameChange}
            handleSubmit={this.handleSubmit}
            />
            <Sort
            handleAlphabeticalChange={this.handleAlphabeticalChange}
            handleTypeChange={this.handleTypeChange}
            />
          </div>
          <PokeList
          pokemon={data}
          filter={this.state.filter}
          filterName={this.state.filterName}
          sortAlphabetical={this.state.sortAlphabetical}
          sortType={this.state.sortType}
          />
        </div>
      </div>
    )
  }
}
