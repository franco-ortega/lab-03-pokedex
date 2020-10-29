import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className='search-div'>
                <div className='search-text-div'>
                    Search for Pokemon here:
                </div>
                <div className='search-input-div'>
                    <input />
                </div>
                <div className='search-button-div'>
                    <button>Press Here to Search</button>
                </div>
            </div>
        )
    }
}
