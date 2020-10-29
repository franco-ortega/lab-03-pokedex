import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        console.log(this.props.filterName)
        return (
            <div className='search-div'>
                <div className='search-text-div'>
                    Search for Pokemon here:
                </div>
                <div className='search-input-div'>
                    <form onSubmit={this.props.handleSubmit}>
                        <input name='Search' value={this.props.filterName} onChange={this.props.handleNameChange} />
                        <button>Click to Search</button>
                    </form>
                </div>
                <div>
                {this.props.filterName}
                </div>
            </div>
        )
    }
}
