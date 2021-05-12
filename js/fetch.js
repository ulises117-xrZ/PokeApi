const poke_container = document.getElementById('poke_container');
const pokemons_number = 20;
const inputSearch = document.querySelector('.form-control');
const button = document.querySelector('.btnsearch');
const resultados = document.querySelector('.pokemonResultante');



//recorrer todos los pokemon de acuerdo al numero en
//la variable pokemons_number
//y los asigna a la variable getPokemon
const llamarPokemons = async () => {
        for (let i = 1; i < pokemons_number; i++) {
            await getPokemon(i);
    }
    
}
//para realizar la busqueda de pokemon por nombre o por id
button.addEventListener('click', () => {
    getForResults(inputSearch.value);
})
//llamado a la poke api para recibir los datos de la busqueda
async function getForResults(id2) {
    try {
        const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
        const listaPokemons = await resultado.json();
        mostrarBusqueda(listaPokemons.name,
            listaPokemons.types[0].type.name,
            listaPokemons.sprites.front_shiny,
            listaPokemons.abilities[0].ability.name,
            listaPokemons.id);
    } catch {
        //en caso de no encontrar el error, devolvera:
        Swal.fire(`Pokemon ${inputSearch.value} No encontrado`)
    }
}
//llamado a la poke api para recibir todos los datos
async function getPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    showInCard(pokemon.name,
        pokemon.types[0].type.name,
        pokemon.sprites.front_shiny,
        pokemon.abilities[0].ability.name,
        pokemon.id);
}
    
//crea una lista de n pokemon en la pantalla principal
function showInCard(nombre, type, sprite, hability, id) {
    let fragmento = document.createDocumentFragment();
    let div = document.createElement('div');
    div.innerHTML = ` <div class="pokemon">
            <img src="${sprite}" alt="Imagen de un pokemon bien perron" class="pokemonImagen">
            <p class="Identificador">#0<span class="numeroId">${id}</span></p>
            <p class="nombrePokemon">${nombre}</p>
            <div class="typeAbility">
                <p class="type ${type}"> ${type}</p>
                <p class="hability"> ${hability}</p>
            </div>
        </div>`;
    fragmento.appendChild(div);
    const contenedor = document.getElementById('poke_container');
    contenedor.appendChild(fragmento);
    colorizarPortipo(type);

}
//agregar la informacion de la busqueda del pokemon en el template html
function mostrarBusqueda(nombre, type, sprite, hability, id) {
    document.querySelector('.resultados').classList.toggle('activo')
    document.querySelector('.nombrePokemon').textContent = nombre;
    document.querySelector('.type').textContent = type;
    document.querySelector('.pokemonImagen').setAttribute('src', `${sprite}`);
    document.querySelector('.hability').textContent = hability;
    document.querySelector('.numeroId').textContent = `${id}`;
}
//Funcion para estilizar los elementos de la busqueda
function colorizarPortipo(type) {
    //llamar al elemento p que contiene el tipo de pokemon
    let tipoDe =  document.querySelector('.type')
    switch (type) {
        case 'fire':
            tipoDe.classList.add('fire');
        case 'grass':
            tipoDe.classList.add('grass')
            
    }
}

llamarPokemons();
