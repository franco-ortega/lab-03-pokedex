import React, { Component } from 'react'
import request from 'superagent';
import Sort from './Sort';

export default class Fetch extends Component {

    state = {
        pokeData: [],
        pokemon: '',
        sortAlphabetical: '',
        sortType: 'pokemon',
        
    }

    componentDidMount = async () => {
        this.fetchPokemon()
    }

    fetchPokemon = async () => {
        console.log(this.state.sortAlphabetical)
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}&sort=${this.state.sortType}&direction=${this.state.sortAlphabetical}`);

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
                FETCH PAGE

                <div className='search-and-sort-div'>
                    <div className='fetch-search-div'>
                    <input onChange={this.handleInput} />
                    <button onClick={this.handleButton}>Search by Name</button>
                    </div>
                    <div>
                    <Sort
                    handleAlphabeticalChange={this.handleAlphabeticalChange}
                    handleTypeChange={this.handleTypeChange}
                    />
                    </div>
                </div>


                <div className='fetch-div'>
                    {this.state.pokeData.map(onePoke =>
                        <div key={onePoke.onePoke} className='fetched-pokemon-div'>
                            <p>
                                {onePoke.pokemon}
                                <img src={onePoke.url_image} alt={onePoke.pokemon} />
                            </p>
                        </div>
                    )}
                </div>


            </div>
        )
    }
}
