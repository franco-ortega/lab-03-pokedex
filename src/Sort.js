import React, { Component } from 'react';

export default class Sort extends Component {
    render() {
        return (
            <div className='sort-div'>
                <div className='sort-select-div'>
                <select onChange={this.props.handleTypeChange}>
                    <option value=''>Sort by Category</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                    <option value='hp'>HP</option>
                    <option value='speed'>Speed</option>
                    <option value='shape'>Shape</option>
                    <option value='egg_group_1'>Egg Group 1</option>
                    <option value='egg_group_2'>Egg Group 2</option>
                 </select>
                <select onChange={this.props.handleAlphabeticalChange}>
                    <option value=''>Sort Direction</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                 </div>
            </div>
        )
    }
}
