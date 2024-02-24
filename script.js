const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
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
};


const APIurl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async () => {
    try {
        for (let i = 1; i <= pokemon_count; i++) {
            const response = await fetch(`${APIurl}${i}`);
            
            const data = await response.json();
            
            const pokeId = String(i).padStart(3, '0');
            poke_container.innerHTML +=
            `<div class="pokemon" style="background-color: ${colors[data.types[0].type.name]}">
                    <div class="img-container">
                        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
                    </div>
                    <div class="info">
                        <span class="number" id="number">#${pokeId}</span>
                        <h3 class="name" id="name">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                        <small class="type" id="type">Type: <span>${data.types[0].type.name}</span></small>
                    </div>
                </div>`;
        }
    } catch (error) {
        console.error(`Error obtaining Pokémon data`, error);
    }
};

getPokemon();