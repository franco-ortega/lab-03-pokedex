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
                        </Switch>
                    </div>

                  </div>

                </Router>
              </div>
        )
    }
}