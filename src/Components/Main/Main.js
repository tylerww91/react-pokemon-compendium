import './Main.css';
import React from 'react';
import { usePokemon } from '../../Hooks/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import Select from '../Controls/Select/Select.js';
import Search from '../Controls/Search/Search.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, handleSearch, setSearchedPokemon, loading } =
    usePokemon();

  return (
    <main>
      <div className="type-select">
        <Select {...{ types, handleTypeChange }} />
        <Search {...{ handleSearch, setSearchedPokemon, loading }} />
      </div>
      <div className="cards">
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}

//   if({loading}){`loading`} else {`loaded`}
//      {loading ? `loading...` : `loaded`}
//<main> {loading ? <loadingSpinner/> : <whateverElse/>
//loading && <LoadingSpinner/>
