import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='title-div'>
                    Welcome to the Pokedex!!!
                </div>
                <div className='intro-div'>
                    Search for all the Pokemon in many different ways!
                </div>
            </div>
        )
    }
}
