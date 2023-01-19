import './Main.css';
import React from 'react';
import { usePokemon } from '../../Hooks/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import Select from '../Controls/Select/Select.js';

export default function Main() {
  const { pokemon, types } = usePokemon();
  console.log('types', types);
  return (
    <main>
      <div className="type-select">
        <Select types={types} />
      </div>
      <div className="cards">
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
