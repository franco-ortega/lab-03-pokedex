import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-div'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">All Pokemon</Link></li>
                </ul>



            </div>
        )
    }
}
