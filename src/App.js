import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Fetch from './Fetch.js';
import DetailsPage from './DetailsPage.js';
import Pagination from './Pagination.js';

export default class App extends Component {

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
                        <Switch>
                            <Route 
                                path="/" 
                                exact
                                render={(routerProps) => <Home {...routerProps} />} 
                            />
                            <Route 
                                path="/fetch" 
                                exact
                                render={(routerProps) => <Fetch {...routerProps} />} 
                            />
                            <Route 
                                path="/details/:pokemonDetails"
                                exact
                                render={(routerProps) => <DetailsPage {...routerProps} />} 
                            />
                            <Route 
                                path="/pagination"
                                exact
                                render={(routerProps) => <Pagination {...routerProps} />} 
                            />                                                        
                        </Switch>
                    </div>

                  </div>

                </Router>
              </div>
        )
    }
}