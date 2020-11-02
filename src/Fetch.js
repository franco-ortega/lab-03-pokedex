import React, { Component } from 'react'
import request from 'superagent';
import Sort from './Sort';
import { Link } from 'react-router-dom';

export default class Fetch extends Component {

    state = {
        pokeData: [],
        pokemon: '',
        sortAlphabetical: '',
        sortType: 'id',
        loading: true
    }

    componentDidMount = async () => {
        this.fetchPokemon()
    }

    fetchPokemon = async () => {
        this.setState({
            loading: true
        });
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}&sort=${this.state.sortType}&direction=${this.state.sortAlphabetical}`);

        this.setState({ pokeData: response.body.results, loading: false})
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

//Pokemon Click

      handleClick = async (onePoke) => {
          this.props.history.push(`pokeData/${onePoke.pokemon}`);
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
                    this.state.loading
                    ? <div><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' /> </div>
                    : this.state.pokeData.map(onePoke =>
                        <Link to={`/pagination/${onePoke.pokemon}`}>
                       <div key={onePoke.onePoke} onClick={(e) => this.handleClick(onePoke)} className='fetched-pokemon-div'>
                            <p>
                                <p className='poke-name'>{onePoke.pokemon}</p>
                                <img src={onePoke.url_image} alt={onePoke.pokemon} />
                                <p><span className='underline'>Type:</span> {onePoke.type_1}</p>
                                <p><span className='underline'>Attack: </span>{onePoke.attack}</p>
                                <p><span className='underline'>Defense:</span> {onePoke.defense}</p>
                                <p><span className='underline'>HP:</span> {onePoke.hp}</p>
                                <p><span className='underline'>Speed:</span> {onePoke.speed}</p>
                                <p><span className='underline'>Ability 1:</span> {onePoke.ability_1}</p>
                                <p><span className='underline'>Hidden Ability:</span> {onePoke.ability_hidden}</p>
                                <p><span className='underline'>Egg Group 1:</span> {onePoke.egg_group_1}</p>
                                <p><span className='underline'>Egg Group 2:</span> {onePoke.egg_group_2}</p>
                                <p><span className='underline'>Shape:</span> {onePoke.shape}</p>
                            </p>
                        </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
