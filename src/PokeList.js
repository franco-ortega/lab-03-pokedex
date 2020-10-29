import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>

                {
                    this.props.pokemon.map(onePokemon => 
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
