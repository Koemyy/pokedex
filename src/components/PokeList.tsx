import {useEffect, useState} from "react";

interface PokeList {
    title: string,
    detail: string
}

function PokeList({title, detail}: PokeList) {
    const [allPokemons, setAllPokemons] = useState([]);
    const getAllPokemons = async () => {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649");
        const data = await res.json();
        setAllPokemons(data.results)
    }
    console.log(allPokemons)
    useEffect(() => {
        getAllPokemons()
    }, [])
    return (
        <div>
             <div>

             </div>
        </div>
    )
}

export default PokeList
