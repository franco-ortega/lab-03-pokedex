import React, { Component } from 'react';

export default class Sort extends Component {
    render() {
        return (
            <div className='sort-div'>
                {/* <div className='sort-text-div'>
                Sort Pokemon
                </div> */}
                <div className='sort-select-div'>
                <select onChange={this.props.handleAlphabeticalChange}>
                    <option value=''>Sort by Name</option>
                    <option value='asc'>Type: A to Z</option>
                    <option value='desc'>Type: Z to A</option>
                </select>
                <select onChange={this.props.handleTypeChange}>
                    <option value=''>Sort by Attack/Defense</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                 </select>
                 </div>
            </div>
        )
    }
}
