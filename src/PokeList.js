import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {

        const filteredPokemon = this.props.pokemon.filter((onePokemon) => {
            if (!this.props.submitName) return true;

            if (onePokemon.pokemon.includes(this.props.submitName)) return true;
            
            //if ascending is chosen, sort all pokemon A-Z
            //if descending is chosen, sort all pokemon Z-A
//            if (onePokemon.type.sort((a, b) => a.type - b.type))

//            if (this.props.sortAlphabetical.sort((a, b) => a.type - b.type)) return true;
          
            return false;
        }).sort((a, b) => {
            if (this.props.sortAlphabetical === 'ascending') return a.type_1.localeCompare(b.type_1);
         else {
            return b.type_1.localeCompare(a.type_1);
        }
            
    })

//        if(this.props.sortAlphabetical.sort((a, b) => { return a.type - b.type }))

console.log(this.props.sortAlphabetical);
        return (
            <div>

                {
                    filteredPokemon.map(onePokemon => 
                        <PokeItem 
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
