const poke_container = document.getElementById('poke_container');
const pokemons_number = 10;


const llamarPokemons = async () => {
    for (let i = 1; i < pokemons_number; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    showInCard(pokemon.name,
        pokemon.types[0].type.name,
        pokemon.sprites.front_shiny,
        pokemon.abilities[0].ability.name,
        pokemon.id)
    
}

function showInCard(nombre, type, sprite, hability, id) {
    let fragmento = document.createDocumentFragment();
    let div = document.createElement('div');
    div.innerHTML = ` <div class="pokemon">
            <img src="${sprite}" alt="Imagen de un pokemon bien perron" class="pokemonImagen">
            <p class="Identificador">#0<span class="numeroId">${id}</span></p>
            <p class="nombrePokemon">${nombre}</p>
            <div class="typeAbility">
                <p class="type"> ${type}</p>
                <p class="hability"> ${hability}</p>
            </div>
        </div>`;
    fragmento.appendChild(div);
    const contenedor = document.getElementById('poke_container');
    contenedor.appendChild(fragmento);

    
}


llamarPokemons();
