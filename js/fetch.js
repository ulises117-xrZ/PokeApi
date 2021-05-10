function ListaDeType() {
    fetch('https://pokeapi.co/api/v2/type/')
        .then(respuesta => respuesta.json())
        .then(pokemon => {
            pokemon.results.forEach((elementos)=> cadaTipo(elementos.url))
        })
    
}

function cadaTipo(url) {
    fetch(`${url}`)
        .then(respuesta => respuesta.json())
        .then(respkemon => {
            respkemon.pokemon.forEach(elementos => {
                Pokemon(elementos.pokemon.url)
            })
        })


}

function Pokemon(PokemonUrl) {
    fetch(`${PokemonUrl}`)
    .then(res => res.json())
    .then(datosPkm => {
            // agregarPokemon( datosPkm.name,
            //                 datosPkm.types[0].type.name,
            //                 datosPkm.sprites.back_default);
            // console.log(datosPkm)
        })
}


function agregarPokemon(nombre, tipo, sprites) {
    const fragmento = document.createDocumentFragment();
    let div = document.createElement('div');
    div.className = "pokemon"
    div.innerHTML = `
        <img src="${sprites}" alt="Imagen del pokachi">
            <div class="propiedades">
                <p>Nombre: <span class="m_nombre n1">${nombre}</span></p>    
                <p>Tipo: <span class="m_poder p1">${tipo}</span></p>
            </div>
    `;
    fragmento.appendChild(div);
    const contenedorPrincipal = document.getElementById("Pokemons-Normales");
    contenedorPrincipal.appendChild(fragmento);
}

// function saberTipo(tipoPokemon) {
//     let Normales = [];
//     switch (tipoPokemon) {
        
//     }
// }


ListaDeType()
//Llamado a la PokeApi con 20 pokemons
// function peticionTodos() {
//     fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
//         .then(response => response.json())
//         .then(pokemon3 => {
//             pokemon3.results.forEach(element => {//pa recorrer todos los urls
//                 peticionPokemon(element.url)//extraer cada url
//             });

//         })
// }


// function peticionPokemon(urlPokemon) {
//     fetch(`${urlPokemon}`)//insertar todos los urls
//         .then(response => response.json())
//         .then(pokemonUnico => {
//             agregarPokemon(
//                 pokemonUnico.name,//el nombre del pokemon
//                 pokemonUnico.types[0].type.name,//el tipo de pokemon
//                 pokemonUnico.sprites.front_default);//la imagen del pokemon
//         })
// }