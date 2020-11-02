import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fetch">Search</Link></li>
                    <li><Link to="/pagination">Pagination</Link></li>
                </ul>
            </div>
        )
    }
}