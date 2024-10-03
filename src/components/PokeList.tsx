import { useEffect, useState } from "react";
import PokemonCard from './PokemonCards';
import axios from 'axios';

function PokeList() {
    const [allPokemons, setAllPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 

    const getAllPokemons = async () => {
        setLoading(true); 
        var endpoints = [];
        for (var i = 1; i < 386; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                setAllPokemons(res);
                setLoading(false); 
            });
    }

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className="w-full h-[100vh] bg-pokemon">
            <div className="h-[86vh] absolute top-[80px] lg:right-[30px] overflow-y-scroll w-full">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-white text-xl">Loading Pokémons...</p>
                    </div>
                ) : (
                    allPokemons.map((pokemonStats, index) => {
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
                    })
                )}
            </div>
        </div>
    );
}

export default PokeList;
