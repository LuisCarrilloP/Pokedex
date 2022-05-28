import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from './PokedexCard';
import pokedexName from "../../src/pokedex-banner.png" /* ó .png */
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [ pokemons, setPokemons ] = useState([])
    const [ pokemonSearch, setPokemonSearch ] = useState("")

    useEffect(() => {
        axios                                                       //1126 para obtener todos
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
            .then(res => setPokemons(res.data.results))
    }, [])

    /* console.log(pokemons); */

    const navigate = useNavigate()

    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }
/* section */
    const filterPokemon = (e) => {
        alert("Filtrado correcto:" + " " + e.target.value)
        axios
            .get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
        
    }

    const [ types, setTypes ] = useState([])

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results))
    },[])

    /* console.log(types); */

    return (
        <div className='pokedex-page'>
            <header className='pokedex-header'>
                <div className='red-rectangle'></div>
                <div className="black-rectangle"></div>
                <div className='pokedex-img-pokedex'>
                    <a href="/">
                        <img src={pokedexName} alt="pokedex banner"/>
                    </a>
                </div>
            </header>

            <main className='pokedex-main'>

            <div className="welcome-msg">
                <p className='welcome-msg'><span className="welcome-msg-span">Welcome {user},</span> here you cand find your favorite Pokemon!</p>
            </div>


            <div>
                <input 
                    type="text" 
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)}
                    placeholder="Buscar pokemon" />
                <button onClick={search}>Buscar</button>
            </div>

{/* Filtrado por type */}
            <select onChange={filterPokemon}>
                <option value="">(select one type)</option>
                {
                    types.map(type => (
                        <option value={type?.url} key={type?.name}>{type?.name}</option>
                    ))
                }
            </select>
                
                
                <div className="pokedex-card-container">
                {
                    pokemons.map(pokemon => (
                                            //en este caso pokemon puede ser un objeto o string
                        <PokedexCard pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url}/>
                    ))
                }
                </div>
            </main>
        </div>
    );
};

export default Pokedex;