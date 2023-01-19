import './Main.css';
import React from 'react';
import { usePokemon } from '../../Hooks/pokemon.js';

export default function Main() {
  const { pokemon } = usePokemon();

  return (
    <main>
      <div>
        {pokemon.map((poke) => (
          <p key={poke.id}>{poke.pokemon}</p>
        ))}
      </div>
    </main>
  );
}
