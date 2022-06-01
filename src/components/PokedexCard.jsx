import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexCard = ({pokemonUrl}) => {

 const [poke, setPoke] = useState({})

 const navigate = useNavigate()
    
    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(res => setPoke(res.data))
    },[])

    /* console.log(poke); */

    //usar mejor css o bootstrap
    /* const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1) */

    const pokemonType = poke.types?.[0].type.name
    const pokemonType2 = poke.types?.[1]?.type.name
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
                            : pokemonType === "shadow" ? "white" : "black"
/* con gradient */
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


    return (
        <div 
            className='pokemon-card' 
            onClick={() => navigate(`/pokedex/${poke.id}`)}
            style={{borderColor: pokemonTypeStyle}}
        >
            {/* {pokemonUrl} */}
                <img src={poke.sprites?.other["official-artwork"]["front_default"]} alt="" width={"200px"}/>
                
                <div className="card-bg" style={{background:pokemonTypeStyle2}}></div>

                <div className='card-name'>
                    <h2 className='cptlz' style={{color:pokemonTypeStyle}}>{poke.name}</h2>
                </div>
                
                <div className='card-1row'>
                    <p className='info info-stats cptlz'>{pokemonType} / {/* / condicional para la"/" */}{pokemonType2}</p>
                    <p className='info info-title'>Tipo</p>
                </div>

                <hr />
                
                <div className="card-2row">
                    <div className="card-2row-1">
                        <p className='info info-title'>HP</p>
                        <p className='info info-stats' style={{color: pokemonTypeStyle}}>{poke.stats?.[0]["base_stat"]}</p>
                    </div>

                    <div className="card-2row-2">
                        <p className='info info-title'>ATAQUE</p>
                        <p className='info info-stats' style={{color: pokemonTypeStyle}}>{poke.stats?.[1]["base_stat"]}</p>
                    </div>
                </div>

                <div className="card-3row">
                    <div className="card-3row-1">
                        <p className='info info-title'>DEFENSA</p>
                        <p className='info info-stats' style={{color: pokemonTypeStyle}}>{poke.stats?.[2]["base_stat"]}</p>
                    </div>

                    <div className="card-3row-2">
                        <p className='info info-title'>VELOCIDAD</p>
                        <p className='info info-stats' style={{color: pokemonTypeStyle}}>{poke.stats?.[5]["base_stat"]}</p>
                    </div>
                </div>
        </div>
    );
};

export default PokedexCard;