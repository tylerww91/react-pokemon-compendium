import { useEffect, useState } from 'react';
import {
  fetchFilteredPokemon,
  fetchPokemon,
  fetchSearchedPokemon,
  fetchTypes,
} from '../services/pokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchFilteredPokemon(type);
    setPokemon(data);
  };

  const handleSearch = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = await fetchSearchedPokemon(searchedPokemon);
    setPokemon(data);
    console.log('data', data);
    setLoading(false);
  };
  return { pokemon, types, handleTypeChange, loading, handleSearch, setSearchedPokemon };
}
