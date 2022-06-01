import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from './PokedexCard';
import pokedexName from "../../src/pokedex-banner.png" /* ó .png */
import { Link, useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [ pokemons, setPokemons ] = useState([])
    const [ pokemonSearch, setPokemonSearch ] = useState("")

    useEffect(() => {
        axios                                                       //1126 para obtener todos
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res => setPokemons(res.data.results))
    }, [])

    /* console.log(pokemons); */

    const navigate = useNavigate()

    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }


/* section */
    const [ types, setTypes ] = useState([])
    
    const filterPokemon = (e) => {
        /* alert("Filtrado correcto:" + " " + e.target.value) */
        axios
            .get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
        
    }

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results))
    },[])

    /* console.log(types); */

    const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1)


/* pagination */
    const [ page, setPage ] = useState(1)
    
    const pokemonsPerPage = 20
    const lastIndex = pokemonsPerPage*page
    const firstIndex = lastIndex-pokemonsPerPage
    const pokemonPagination = pokemons.slice(firstIndex, lastIndex) //rango
    
    const lastPage = Math.ceil(pokemons.length / pokemonsPerPage) 

    const numbers = []
        for(let i = 1; i < lastPage; i++){
            if(i < page +5 && i > page -5){
                numbers.push(i)
            }
        }



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

                <div className="home-btn">
                    <Link to="/">
                        <i className="fa-solid fa-circle circle-i" style={{color: "black"}}></i>
                    </Link>
                </div>
            </header>

            <aside className='aside'>
                
                <i className="fa-solid fa-hand-point-left" style={{color: "greenyellow"}}></i>
                
            </aside>

            <main className='pokedex-main'>

            <div className="welcome-msg">
                <p className='welcome-msg'><span className="welcome-msg-span">Welcome {user},</span> here you cand find your favorite Pokemon!</p>
            </div>


            <div className="search-and-filter">
                {/* Search pokemon */}
                <div className='search-pokemon'>
                            <input 
                                type="text" 
                                value={pokemonSearch}
                                onChange={e => setPokemonSearch(e.target.value)}
                                placeholder="Search pokemon..." 
                                className='search-input'/>
                            <button onClick={search} className="search-btn">Search</button>
                        </div>

            {/* Filtrado por type */}
                        <div className="filter">
                            <select onChange={filterPokemon} className="filter-select">
                                <option value="">Pokemon types</option>
                                {
                                    types.map(type => (
                                        <option value={type?.url} key={type?.name}>
                                            {capitalize(type?.name)}
                                        </option>
                                    ))
                                }
                            </select>
                        </div> 
            </div>
                
                
                <div className="pokedex-card-container">
                {
                    /* pokemons */pokemonPagination.map(pokemon => (
                                            //en este caso pokemon puede ser un objeto o string
                        <PokedexCard pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url}/>
                    ))
                }
                </div>

                <div className="paginationScroll">
                    <button 
                        onClick={() => setPage(page-1)}
                        disabled={page === 1}>
                            <i className="fa-solid fa-angle-left prev-btn"></i>
                    </button>
                    
                    <div className="pageNumbers">
                        {
                            numbers.map(number => (
                                <button 
                                    onClick={() => setPage(number)} 
                                    key={number} 
                                    className="pageNumber-btn"
                                    disabled={page===number}>
                                        {number}
                                </button>
                            ))    
                        }
                    </div>

                    <button 
                        onClick={() => setPage(page+1)}
                        disabled={page === lastPage}>
                            <i className="fa-solid fa-angle-right next-btn"></i>
                    </button>
                </div>

            </main>
        </div>
    );
};

export default Pokedex;