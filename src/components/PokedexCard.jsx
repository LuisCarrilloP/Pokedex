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

    const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1)


    return (
        <div 
            className='pokemon-card' 
            onClick={() => navigate(`/pokedex/${poke.id}`)}
            style={{
                borderColor: poke.types?.[0].type.name === "grass" ? "green" : "#d3d3d3",
              }}>
            {/* {pokemonUrl} */}
            <img src={poke.sprites?.other["official-artwork"]["front_default"]} alt="" width={"200px"}/>
            <h2>{poke.name}</h2>
            <p className='info info-stats'>{poke.types?.[0].type.name}</p>
            <p className='info info-title'>Tipo</p>
            
            <p className='info info-title'>HP</p>
            <p className='info info-stats'>{poke.stats?.[0]["base_stat"]}</p>

            <p className='info info-title'>ATAQUE</p>
            <p className='info info-stats'>{poke.stats?.[1]["base_stat"]}</p>

            <p className='info info-title'>DEFENSA</p>
            <p className='info info-stats'>{poke.stats?.[2]["base_stat"]}</p>

            <p className='info info-title'>VELOCIDAD</p>
            <p className='info info-stats'>{poke.stats?.[5]["base_stat"]}</p>

            
        </div>
    );
};

export default PokedexCard;