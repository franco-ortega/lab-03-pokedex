import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-div'>
                <div>Nav Links</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/list">All Pokemon</Link></li>
                </ul>



            </div>
        )
    }
}
