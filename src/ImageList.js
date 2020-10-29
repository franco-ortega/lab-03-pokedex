import React, { Component } from 'react';
import data from './Data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div>
                ImageList

                {
                    data.map(onePokemon => 
                        <ImageItem 
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
                        url_image={onePokemon.url_image}
                        />
                    )
                }
            </div>
        )
    }
}
