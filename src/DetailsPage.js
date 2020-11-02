import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class DetailsPage extends Component {

    state = {
        pokeData: [],
        loading: true,
        pokemonDetails: ''
    }

    componentDidMount = async () => {
        this.fetchPokemon()
    }

    fetchPokemon = async () => {
        this.setState({
            loading: true
        });
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonDetails}`);

        this.setState({ pokeData: response.body.results[0], loading: false})
    }

    render() {
        return (
            <div className='details-div'>
                <div className='details-link-div'>
                    <p>
                        <Link to="/fetch">Back to Search</Link>
                    </p>
                    <p>
                        <Link to="/pagination">Back to Pagination</Link>
                    </p>
                </div>
                {
                    this.state.loading
                    ? <div><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' /> </div>
                    : 
                       <div key={this.state.pokeData} className='fetched-details-div border'>
                            <p>
                                <p className='poke-name'>{this.state.pokeData.pokemon}</p>
                                <img src={this.state.pokeData.url_image} alt={this.state.pokeData.pokemon} />
                                <p><span className='underline'>Type:</span> {this.state.pokeData.type_1}</p>
                                <p><span className='underline'>Attack: </span>{this.state.pokeData.attack}</p>
                                <p><span className='underline'>Defense:</span> {this.state.pokeData.defense}</p>
                                <p><span className='underline'>HP:</span> {this.state.pokeData.hp}</p>
                                <p><span className='underline'>Speed:</span> {this.state.pokeData.speed}</p>
                                <p><span className='underline'>Ability 1:</span> {this.state.pokeData.ability_1}</p>
                                <p><span className='underline'>Hidden Ability:</span> {this.state.pokeData.ability_hidden}</p>
                                <p><span className='underline'>Egg Group 1:</span> {this.state.pokeData.egg_group_1}</p>
                                <p><span className='underline'>Egg Group 2:</span> {this.state.pokeData.egg_group_2}</p>
                                <p><span className='underline'>Shape:</span> {this.state.pokeData.shape}</p>
                            </p>
                        </div>
                }
            </div>
        )
    }
}