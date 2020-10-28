import React, { Component } from 'react';
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
  }

  handleAlphabeticalChange = (e) => {
    this.setState({
      sortAlphabetical: e.target.value
    });
  }

  handleTypeChange = (e) => {
    this.setState({
      sortType: e.target.value
    });
  }

  render() {
    return (
      <div>
        App.js Page
        <Header />
        <Nav />
        <ImageList pokemon={data} />
        <Search />
        <Sort />
      </div>
    )
  }
}
