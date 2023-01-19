import './PokemonCard.css';
import React from 'react';

export default function PokemonCard({ pokemon, weight, type_1, type_2, url_image }) {
  return (
    <div className="pokemonCard">
      <h2>{pokemon}</h2>
      <img src={`${url_image}`} />
      <span>{type_1}</span>
      <span>{type_2}</span>
      <p>{weight}</p>
    </div>
  );
}
