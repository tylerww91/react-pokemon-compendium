export async function fetchPokemon() {
  const res = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await res.json();
  return data.results;
}

export async function fetchTypes() {
  const res = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await res.json();
  return data;
}

export async function fetchFilteredPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const res = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await res.json();
  return data.results;
}

export async function fetchSearchedPokemon(pokemon) {
  const params = new URLSearchParams();
  params.set('pokemon', pokemon);
  const res = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await res.json();
  return data.results;
}

// link for limiting to 10 https://alchemy-pokedex.herokuapp.com/api/pokedex?page=3&perPage=10
