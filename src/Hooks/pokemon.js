import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      console.log('data', data);
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      console.log('datatypes', data);
      setTypes(data);
    };
    fetchData();
  }, []);

  return { pokemon, types };
}
