import './Search.css';
import React from 'react';

import pokeButton from '../../../pokeball-button.png';

export default function Search({ handleSearch, setSearchedPokemon, loading }) {
  if (loading)
    return (
      <form onSubmit={(e) => handleSearch(e)}>
        <input onChange={(e) => setSearchedPokemon(e.target.value)}></input>
        <button className="loading-button">
          <img className="poke-button" src={pokeButton} />
        </button>
      </form>
    );

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input onChange={(e) => setSearchedPokemon(e.target.value)}></input>
      <button>
        <img className="poke-button" src={pokeButton} />
      </button>
    </form>
  );
}
