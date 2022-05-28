import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const { id } = useParams()

    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    /* console.log(pokemon); */

    const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1)

    return (
        <div className='pokemonDetail'>
            <h2>Pokemon Detail</h2>
            <img src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" width={"200px"} />
            <p>#{id}</p>
            <h3>{capitalize(pokemon.name)}</h3>
            <p>{pokemon.weight}</p>
            <p><b>Peso</b></p>
            <p>{pokemon.height}</p>
            <p><b>Altura</b></p>
            <p><b>Tipo</b></p>
                <div>
                    <p>{capitalize(pokemon.types?.[0]?.type.name)}</p>
                    <p>{capitalize(pokemon.types?.[1]?.type.name)}</p>
                </div>
            <p><b>Habilidades</b></p>
            <div>
                <p>{capitalize(pokemon.abilities?.[0]?.ability.name)}</p>
                <p>{capitalize(pokemon.abilities?.[1]?.ability.name)}</p>
            </div>
        </div>
    );
};

export default PokemonDetail;