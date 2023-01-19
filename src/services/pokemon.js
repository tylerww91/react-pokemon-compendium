
export async function fetchPokemon() {
    const res = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/')
    const data = await res.json();
    return data.results
}