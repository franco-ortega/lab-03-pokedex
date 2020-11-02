import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class Pagination extends Component {
    state = {
        pokeData: [],
        pokemon: '',
        loading: false,
        pageNumber: 1
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleSumbit = async (e) => {
        e.preventDefault();
        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ pokemon: e.target.value });
    }

    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1,
        })
        await this.fetchPokemon();
    }

    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1,
        })
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true })
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);

        this.setState({
            pokeData: response.body.results,
            loading: false,
            count: response.body.count
        })
    }

    handleClick = async (onePoke) => {
        this.props.history.push(`pokeData/${onePoke.pokemon}`);
    }

    render() {
        return (
            <div className='pagination-div'>
                <div className='search-and-button-div'>
                    <form onSubmit={this.handleSumbit}>
                        <input onChange={this.handleChange} />
                        <button>Search by Character</button>
                    </form>
                    <div>
                        Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
                    </div>
                    <div>
                        {this.state.count} total Pokemon in query.
                    </div>
                    <div className='button-div'>
                    {
                        <button
                        disabled={this.state.pageNumber === 1}
                        onClick={this.handleDecrement}
                        >
                            Prev
                        </button>
                    }
                    {
                        <button
                        disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}
                        onClick={this.handleIncrement}
                        >
                            Next
                        </button>
                    }
                    </div>
                </div>
                <div className='pokemon-pagination-div'>
                    {
                    this.state.loading
                    ? <div><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' /> </div>
                    : this.state.pokeData.map(onePoke =>
                        <Link to={`/details/${onePoke.pokemon}`}>
                       <div key={onePoke.onePoke} onClick={(e) => this.handleClick(onePoke)} className='fetched-details-div'>
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
