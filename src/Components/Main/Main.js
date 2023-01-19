import './Main.css';
import React from 'react';
import { usePokemon } from '../../Hooks/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';

export default function Main() {
  const { pokemon } = usePokemon();

  return (
    <main>
      <div>
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
