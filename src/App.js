import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import Nav from './Nav.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
//import data from './Data.js';
import Home from './Home.js';

export default class App extends Component {


  state = {
    filterName: '',
    submitName: '',
    sortAlphabetical: '',
    sortAttack: '',
  }

  handleNameChange = (e) => {
    this.setState({
      filterName: e.target.value
    });
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

  handleAttackChange = (e) => {
    this.setState({
      sortAttack: e.target.value
    });
    console.log('Attack: ' + e.target.value);
  }


    render() {
        return (
            <div>
                <Router>
                  <div className='whole-site-div'>

                    <div className='top-div'>
                      <Nav />
                      <Header />
                    </div>

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
                        handleAttackChange={this.handleAttackChange}
                        />
                      </div>

                      {/* <PokeList
                      pokemon={data}
                      submitName={this.state.submitName}
                      sortAlphabetical={this.state.sortAlphabetical}
                      sortAttack={this.state.sortAttack}
                      /> */}
        
                      <div className='switch-div'>
                        <Switch>
                            <Route 
                                path="/" 
                                exact
                                render={(routerProps) => <Home {...routerProps} />} 
                            />
                            <Route 
                                path="/list" 
                                exact
                                render={(routerProps) => <PokeList {...routerProps} />} 
                            />
                        </Switch>
                        </div>

                    </div>

                  </div>

                </Router>
              </div>
        )
    }
}