import './Search.css';
import React from 'react';

export default function Search({ handleSearch, setSearchedPokemon }) {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input onChange={(e) => setSearchedPokemon(e.target.value)}></input>
      <button>Search</button>
    </form>
  );
}
