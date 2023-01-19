import { useEffect, useState } from 'react';
import { fetchFilteredPokemon, fetchPokemon, fetchTypes } from '../services/pokemon.js';

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

  const handleTypeChange = async (type) => {
    const data = await fetchFilteredPokemon(type);
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange };
}
