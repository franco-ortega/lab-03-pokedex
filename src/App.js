import React, { Component } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import ImageList from './ImageList.js';
import Search from './Search.js';
import Sort from './Sort.js';
import data from './Data.js';

export default class App extends Component {
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
