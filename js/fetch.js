//Llamado a la PokeApi con 20 pokemons
function peticionTodos() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
        .then(response => response.json())
        .then(pokemon3 => {
            pokemon3.results.forEach(element => {//pa recorrer todos los urls
                peticionPokemon(element.url)//extraer cada url
            });

        })
}


function peticionPokemon(urlPokemon) {
    fetch(`${urlPokemon}`)//insertar todos los urls
        .then(response => response.json())
        .then(pokemonUnico => {
            agregarPokemon(
                pokemonUnico.name,//el nombre del pokemon
                pokemonUnico.types[0].type.name,//el tipo de pokemon
                pokemonUnico.sprites.front_default);//la imagen del pokemon
        })
}

function agregarPokemon(nombre, tipo, sprites) {//aca defino parametros para modif. el html
    const fragment = document.createDocumentFragment();//cree un fragmento para que sea mas optimo
    const div = document.createElement('div');
    div.className = "pokemon"
    div.innerHTML = 
        `
            <img src="${sprites}" alt="Imagen del pokachi">
            <div class="propiedades">
                <p>Nombre: <span class="m_nombre n1">${nombre}</span></p>    
                <p>Tipo: <span class="m_poder p1">${tipo}</span></p>
            </div>
        `;
    fragment.appendChild(div);//agrego el div al fragmento
    const principalDiv = document.querySelector(".pokemon-container")
    principalDiv.appendChild(fragment);//agrego el fragmento al body (html)
}

peticionTodos();



