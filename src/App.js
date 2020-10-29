import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import ImageList from './ImageList.js';
import Search from './Search.js';
import Sort from './Sort.js';
import data from './Data.js';

export default class App extends Component {

  state = {
    filterName: '',
    sortAlphabetical: '',
    sortType: '',
  }

  handleNameChange = (e) => {
    this.setState({
      filterName: e.target.value
    });
    console.log('Name: ' + e.target.value);
  }

  handleAlphabeticalChange = (e) => {
    this.setState({
      sortAlphabetical: e.target.value
    });
    console.log(e.target.value);
  }

  handleTypeChange = (e) => {
    this.setState({
      sortType: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className='body-div'>
          <div className='sidebar-div'>
            <Search
            filterName={this.state.filterName}
            handleNameChange={this.handleNameChange}
            />
            <Sort
            handleAlphabeticalChange={this.handleAlphabeticalChange}
            handleTypeChange={this.handleTypeChange}
            />
          </div>
          <ImageList
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
