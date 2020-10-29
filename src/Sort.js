import React, { Component } from 'react';

export default class Sort extends Component {
    render() {
        return (
            <div className='sort-div'>
                <div className='sort-text-div'>
                Sort Pokemon
                </div>
                <div className='sort-select-div'>
                <select onChange={this.props.handleAlphabeticalChange}>
                    <option value=''>Sort by Type</option>
                    <option value='ascending'>Type: A to Z</option>
                    <option value='descending'>Type: Z to A</option>
                </select>
                <select onChange={this.props.handleAttackChange}>
                    <option value=''>Sort by Attack</option>
                    <option value='low-to-high'>Attack: Low to High</option>
                    <option value='high-to-low'>Attack: High to Low</option>
                 </select>
                 </div>
            </div>
        )
    }
}
