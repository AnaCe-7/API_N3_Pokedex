const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 150; i++) {
    fetch(API_URL + i)
        .then((response) => response.json())
        // .then(data => showPokemonCard(data))
    .then(data => console.log(data))
}

// function showPokemonCard(pokemonData) {
//     const div = document.createElement("div");
//     div.classList.add("pokemon");
//     div.innerHTML = `
//         <div class="img-container">
//             <img src="${pokemonData.sprites.other["official-artwork"].front_default}" alt="${pokemonData.name}">
//         </div>
//         <div class="info">
//           <span class="number">${pokemonData.held_items}</span>
//           <h3 class="name">${pokemonData.moves.name}</h3>
//           <small class="type">Type: <span>${pokemonData.types[0].slot[1].type.name}</span></small>
//         </div>
//     `;
// }

// pokeContainer.append(div);