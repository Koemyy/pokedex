import {useEffect, useState} from "react";
import PokemonCard from './PokemonCards';
import axios from 'axios';
import bg_pokemon from '../images/bg_pokemon.jpg';

function PokeList() {
    const [allPokemons, setAllPokemons] = useState<any[]>([]);
    const getAllPokemons = async () => {
        var endpoints = [];
        for (var i = 1; i < 659; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setAllPokemons(res));
    }

    console.log(allPokemons)
    useEffect(() => {
        getAllPokemons()
    }, [])
    return (
        <div className="w-full h-[100vh] bg-pokemon">
            <div className="h-[86vh] absolute top-[80px] right-[30px] overflow-y-scroll w-full">
                {allPokemons.map((pokemonStats, index) => {
                    return (
                        <PokemonCard
                            key={index}
                            // @ts-ignore
                            id={pokemonStats.data.id}
                            image={pokemonStats.data.sprites.front_default}
                            name={pokemonStats.data.name}
                            type={pokemonStats.data.types[0].type.name}
                            weight={pokemonStats.data.weight}
                            height={pokemonStats.data.height}
                            stats={pokemonStats.data.stats}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PokeList
