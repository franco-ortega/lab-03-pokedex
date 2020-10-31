import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-div'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fetch">Search</Link></li>
                </ul>



            </div>
        )
    }
}
