import React, { Component } from 'react'
import request from 'superagent';
import Sort from './Sort';

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class Fetch extends Component {

    state = {
        pokeData: [],
        pokemon: '',
        sortAlphabetical: '',
        sortType: 'id',
        loading: ''
    }

    componentDidMount = async () => {
        this.fetchPokemon()
    }

    fetchPokemon = async () => {
        console.log(this.state.sortAlphabetical)
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}&sort=${this.state.sortType}&direction=${this.state.sortAlphabetical}`);

        await sleep(1000)

        this.setState({ pokeData: response.body.results})
    }


//Search Input and Button
    handleInput = async (e) => {
        this.setState({ pokemon: e.target.value });
    }

    handleButton = async (e) => {
        this.setState({ pokemon: e.target.value });
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}`);

        this.setState({ pokeData: response.body.results})
    }


    
//Drop Down Menus
    handleAlphabeticalChange = async (e) => {
        await this.setState({
            sortAlphabetical: e.target.value
        });
        this.fetchPokemon()
        console.log('ABC: ' + e.target.value);
      }
    
      handleTypeChange = async (e) => {
        await this.setState({
          sortType: e.target.value
        });
        this.fetchPokemon()
        console.log('Type: ' + e.target.value);
      }



    render() {
        return (
            <div>

                <div className='search-and-sort-div'>
                    <div className='search-div'>
                        <input onChange={this.handleInput} />
                        <button onClick={this.handleButton}>Search by Name</button>
                    </div>
                    <div className='sort-div'>
                        <Sort
                        handleAlphabeticalChange={this.handleAlphabeticalChange}
                        handleTypeChange={this.handleTypeChange}
                        />
                    </div>
                </div>


                <div className='fetch-div'>
                    {
                    this.state.pokeData.length === 0
                    ? <div><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' /> </div>
                    : this.state.pokeData.map(onePoke =>
                       
                       
                       
                       <div key={onePoke.onePoke} className='fetched-pokemon-div'>
                            <p>
                                <div>{onePoke.pokemon}</div>
                                <img src={onePoke.url_image} alt={onePoke.pokemon} />
                                <div>Type: {onePoke.type_1}</div>
                                <div>Attack: {onePoke.attack}</div>
                                <div>Defense: {onePoke.defense}</div>
                                <div>HP: {onePoke.hp}</div>
                                <div>Speed: {onePoke.speed}</div>
                                <div>Ability 1: {onePoke.ability_1}</div>
                                <div>Hidden Ability: {onePoke.ability_hidden}</div>
                                <div>Egg Group 1: {onePoke.egg_group_1}</div>
                                <div>Egg Group 2: {onePoke.egg_group_2}</div>
                                <div>Shape: {onePoke.shape}</div>
                            </p>
                        </div>

                        
                    )}
                </div>


            </div>
        )
    }
}
