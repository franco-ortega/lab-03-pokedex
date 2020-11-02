import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import data from './Data.js';

export default class PokeList extends Component {
    render() {
        

        const filteredPokemon = data.filter((onePokemon) => {
            if (!this.props.submitName) return true;
            if (onePokemon.pokemon.includes(this.props.submitName)) return true;
            return false;
            
        }).sort((a, b) => {
            if (this.props.sortAlphabetical === 'ascending') return a.type_1.localeCompare(b.type_1);
            if (this.props.sortAlphabetical === 'descending') return b.type_1.localeCompare(a.type_1);
            return false;
        }).sort((a, b) => {
            if (this.props.sortAttack === 'low-to-high') return a.attack - b.attack;
            if (this.props.sortAttack === 'high-to-low') return b.attack - a.attack;
            return false;
        })

        return (
            <div>POKELIST PAGE
                {
                    filteredPokemon.map(onePokemon => 
                        <PokeItem 
                        pokemon={data}

                        name={onePokemon.pokemon}
                        type={onePokemon.type_1}
                        attack={onePokemon.attack}
                        defense={onePokemon.defense}
                        hp={onePokemon.hp}
                        speed={onePokemon.speed}
                        ability_1={onePokemon.ability_1}
                        ability_hidden={onePokemon.ability_hidden}
                        egg_group_1={onePokemon.egg_group_1}
                        egg_group_2={onePokemon.egg_group_2}
                        shape={onePokemon.shape}
                        url={onePokemon.url_image}
                        />
                    )
                }
            </div>
        )
    }
}
