import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedexName from "../../src/pokedex-banner.png"
import vector from "../../src/vector.png"
import { Link } from 'react-router-dom';

const PokemonDetail = () => {

    const { id } = useParams()

    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    /* console.log(pokemon); */

    /* const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1) */

    const [ moves, setMoves ] = useState("")

    const pokemonType = pokemon.types?.[0].type.name
    const pokemonTypeStyle = pokemonType === "normal" ? "#735259"
                            : pokemonType === "fighting" ? "#96402a"
                            : pokemonType === "flying" ? "white"
                            : pokemonType === "poison" ? "#ce9bff"
                            : pokemonType === "ground" ? "#654008" 
                            : pokemonType === "rock" ? "#7E7E7E"
                            : pokemonType === "bug" ? "#4AB648"
                            : pokemonType === "ghost" ? "#323569"
                            : pokemonType === "steel" ? "#5E736C"
                            : pokemonType === "fire" ? "#E6901E" 
                            : pokemonType === "water" ? "#83B9FF"
                            : pokemonType === "grass" ? "#B1DBBC"
                            : pokemonType === "electric" ? "#0C1395"
                            : pokemonType === "psychic" ? "white"
                            : pokemonType === "ice" ? "#6FBEDF"
                            : pokemonType === "dragon" ? "#478A93"
                            : pokemonType === "dark" ? "#0B0E0D"
                            : pokemonType === "fairy" ? "#971B45"
                            : pokemonType === "unknown" ? "white"
                            : pokemonType === "shadow" ? "white" : "white"
    const pokemonTypeStyle2 = pokemonType === "grass" ? "-webkit-gradient(linear, left top, left bottom, color-stop(0.92%, #7EC6C5), color-stop(47.96%,#ABDAC6), color-stop(99.08%,#CAE099))" : 
                                pokemonType === "fire" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-32.36%, #F96D6F), color-stop(22.55%,#E35825), color-stop(125.72%,#E8AE1B))" : 
                                pokemonType === "water" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-70.14%, #133258), color-stop(56.16%,#1479fb), color-stop(214.85%,#82b2f1))" : 
                                pokemonType === "bug" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-58.92%, #62DB60), color-stop(16.57%,#3BB039), color-stop(209.53%,#AAFFA8))" : 
                                pokemonType === "normal" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-6.44%, #735259), color-stop(121.95%,#BC6B7C), color-stop(186.11%,#7C3F4C))" : 
                                pokemonType === "fighting" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-8.78%, #96402a), color-stop(169.09%,#f1613c), color-stop(242.33%,#cb735d))" : 
                                pokemonType === "poison" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-11.97%, #5b3184), color-stop(71.28%,#a564e3), color-stop(135.64%,#ce9bff))" : 
                                pokemonType === "ghost" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-11.97%, #323569), color-stop(57.49%,#454aab), color-stop(135.64%,#787dda))" : 
                                pokemonType === "rock" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-11.97%, #7e7e7e), color-stop(57.49%,#8d8d94), color-stop(135.64%,#d3d3d3))" : 
                                pokemonType === "dark" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-11.97%, #030706), color-stop(57.49%,#0d1211), color-stop(135.64%,#5a5e5d))" : 
                                pokemonType === "ice" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-11.97%, #6fbedf), color-stop(47.77%,#64cbf5), color-stop(136.72%,#bdebfe))" : 
                                pokemonType === "steel" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-19.96%, #5e736c), color-stop(43.67%,#728881), color-stop(138.4%,#a8a8a8))" : 
                                pokemonType === "dragon" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-19.96%, #478a93), color-stop(43.67%,#56a4ae), color-stop(138.4%,#a2bec1))" : 
                                pokemonType === "fairy" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-19.96%, #971b45), color-stop(43.67%,#c23867), color-stop(138.4%,#cd7d98))" : 
                                pokemonType === "electric" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-19.96%, #0c1395), color-stop(43.67%, #2b319b), color-stop(138.4%,#7075d9))" : 
                                pokemonType === "ground" ? "-webkit-gradient(linear, left top, left bottom, color-stop(-19.96%, #654008), color-stop(43.67%,#895c1a), color-stop(138.4%,#d69638))" : "white"

    
    const navigate = useNavigate()
    
    return (
        <div className='pokemonDetail'>

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
                
                <i className="fa-solid fa-hand-point-left" style={{color: "blue"}} onClick={() => navigate(-1)}></i>
                
            </aside>

            <main className='pokemon-detail-main'>
                <div className='pokemon-detail-bg' style={{background:pokemonTypeStyle2}}>
                    <img src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" width={"250px"} />
                </div>
                
                <p className='pokemon-id'>#{pokemon.id}</p>
                <div className='pokemon-detail-name'>
                    <img src={vector} alt="vector" className='vector'/>
                    <h3 className='cptlz'>{pokemon.name}</h3>
                    <img src={vector} alt="vector" className='vector'/>
                </div>

                <div className="pokemon-detail-1row">
                    <div className="pokemon-detail-1row-1">
                        <p><b>Peso</b></p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="pokemon-detail-1row-2">
                        <p><b>Altura</b></p>
                        <p>{pokemon.height}</p>
                    </div>
                </div>

                <div className="pokemon-detail-2row">
                    <div className="pokemon-detail-2row-1">
                        <p><b>Tipo</b></p>
                        <div className='pk-dt-rec'>
                            <p className='cptlz' style={{background:pokemonTypeStyle}}>{pokemon.types?.[0]?.type.name}</p>
                            <p className='cptlz'>{pokemon.types?.[1]?.type.name}</p>
                        </div>
                    </div>
                    <div className="pokemon-detail-2row-2">
                        <p><b>Habilidades</b></p>
                        <div className='pk-dt-rec pk-dt-rec2'>
                            <p className='cptlz'>{pokemon.abilities?.[0]?.ability.name}</p>
                            <p className='cptlz'>{pokemon.abilities?.[1]?.ability.name}</p>
                        </div>
                    </div>
                </div>

                <div className="pokemon-detail-3row">
                    <h2>Stats</h2>
                    <img src={vector} alt="" />
                </div>
            
            {/* Stats */}
                <div className="pokemon-detail-stats-container">

                    <div className="pokemon-detail-4row">
                        <div className="pokemon-detail-4row-1">
                            <p>HP:</p>
                            <p>{pokemon.stats?.[0]["base_stat"]}/150</p>
                        </div>
                        <div className="pokemon-detail-4row-2">
                            <progress value={pokemon.stats?.[0]["base_stat"]} max="150"></progress>
                        </div>
                    </div>

                    <div className="pokemon-detail-5row">
                        <div className="pokemon-detail-5row-1">
                            <p>ATTACK:</p>
                            <p>{pokemon.stats?.[1]["base_stat"]}/150</p>
                        </div>
                        <div className="pokemon-detail-4row-2">
                            <progress value={pokemon.stats?.[1]["base_stat"]} max="150"></progress>
                        </div>
                    </div>

                    <div className="pokemon-detail-6row">
                        <div className="pokemon-detail-6row-1">
                            <p>DEFENSA:</p>
                            <p>{pokemon.stats?.[2]["base_stat"]}/150</p>
                        </div>
                        <div className="pokemon-detail-6row-2">
                            <progress value={pokemon.stats?.[2]["base_stat"]} max="150"></progress>
                        </div>
                    </div>
                    
                    <div className="pokemon-detail-7row">
                        <div className="pokemon-detail-7row-1">
                            <p>VELOCIDAD:</p>
                            <p>{pokemon.stats?.[5]["base_stat"]}/150</p>
                        </div>
                        <div className="pokemon-detail-7row-2">
                            <progress value={pokemon.stats?.[5]["base_stat"]} max="150"></progress>
                        </div>
                    </div>

                </div>

                <footer>
                    <div className="pokemon-detail-footer">
                        <h2>Movements</h2>
                        <img src={vector} alt="" />
                    </div>

                    <div className="pokemon-detail-footer-content">
                        <ul>
                        {
                            pokemon.moves?.map(move => (
                                <li>
                                    <div key={pokemon.id} className="move-div cptlz">{move.move.name}</div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </footer>
            </main>

           

           
        </div>
    );
};

export default PokemonDetail;