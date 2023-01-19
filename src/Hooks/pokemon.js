import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/pokemon.js";

export function usePokemon() {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemon();
            setPokemon(data);
        }
        fetchData();
    }, [])
}