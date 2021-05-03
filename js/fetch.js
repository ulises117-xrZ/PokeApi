//funcion para insertar nombre 
const nombresPokemon = (clase, nombre)=>document.querySelector(clase).innerHTML = nombre;

//funciones para insertar El tipo de pokemon
const poderesPokemon = (clase, poder)=> document.querySelector(clase).innerHTML = poder;

//funciones para insertar Imagen del pokemon
const imagenesPokemon = (clase, imagen)=> document.querySelector(clase).setAttribute("src", imagen);


function peticiones(numeroPoke,nombre, poder, imagen) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPoke}/`)
    .then(response => response.json())
    .then(pokemon2=>{
        debugger
        nombresPokemon(nombre, pokemon2.name);
        poderesPokemon(poder, pokemon2.types[0].type.name);
        imagenesPokemon(imagen, pokemon2.sprites.front_default);
    })
}

peticiones(25, ".m_nombre", ".m_poder", ".m_pokemon_i");
peticiones(26, ".m_nombre2", ".m_poder2", ".m_pokemon_i2");
peticiones(27, ".m_nombre3", ".m_poder3", ".m_pokemon_i3");
peticiones(28, ".m_nombre4", ".m_poder4", ".m_pokemon_i4");












//fetch es para llamar y conectar apis
//informacion de pikachu
// fetch('https://pokeapi.co/api/v2/pokemon/25/')
//     .then(response => response.json())
//     .then(pokemon =>{
//         // debugger
//         nombresPokemon(".m_nombre",pokemon.name);
//         poderesPokemon(".m_poder", pokemon.types[0].type.name);
//         imagenesPokemon(".m_pokemon_i", pokemon.sprites.front_default);
//     })
// //informacion de raichu
// fetch('https://pokeapi.co/api/v2/pokemon/26/')
//     .then(response => response.json())
//     .then(pokemon2=>{
//         nombresPokemon(".m_nombre1", pokemon2.name);
//         // debugger
//         poderesPokemon(".m_poder1", pokemon2.types[0].type.name);
//         imagenesPokemon(".m_pokemon_i1", pokemon2.sprites.front_default);
//     })