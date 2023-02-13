import './PokemonCard.css';
import React from 'react';

export default function PokemonCard({ pokemon, weight, type_1, type_2, url_image, height }) {
  return (
    <div className="pokemonCard">
      <h2>{pokemon}</h2>
      <img src={`${url_image}`} />
      <p>
        Type: {type_1}, {type_2}
      </p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  );
}

// const doubleType = ({ type_2 }) => {
//   if (type_2.value === 'NA') {
//     return '';
//   } else if (type_2.value !== 'NA') {
//     return type_2.value;
//   }

//   }

// }
