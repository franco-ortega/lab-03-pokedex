import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
            <div className='pokemon-div'>
                <div>Name: {this.props.name}</div>
                <div><img src={this.props.url} alt={this.props.name} /></div>
                <div>Type: {this.props.type}</div>
                <div>Attack: {this.props.attack}</div>
                <div>Defense: {this.props.defense}</div>
                <div>HP: {this.props.hp}</div>
                <div>Speed: {this.props.speed}</div>
                <div>Ability: {this.props.ability_1}</div>
                <div>Ability (Hidden): {this.props.ability_hidden}</div>
                <div>Egg Group 1: {this.props.egg_group_1}</div>
                <div>Egg Group 2: {this.props.egg_group_2}</div>
                <div>Shape: {this.props.shape}</div>
            </div>
        )
    }
}
