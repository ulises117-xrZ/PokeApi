const poke_container = document.getElementById('poke_container');
let pokemons_number = 35;
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
    }
    catch (e) {
        //en caso de no encontrar el error, devolvera:
        Swal.fire(`Pokemon ${inputSearch.value} No encontrado, error ${e}`)
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

}
//agregar la informacion de la busqueda del pokemon en el template html
function mostrarBusqueda(nombre, type, sprite, hability, id) {
    document.querySelector('.resultados').classList.toggle('activo')
    document.querySelector('.nombrePokemon').textContent = nombre;
    let elemento = document.getElementById('Tipo');
    elemento.textContent = type;
    elemento.classList.toggle(`${type}`);
    document.querySelector('.pokemonImagen').setAttribute('src', `${sprite}`);
    document.querySelector('.hability').textContent = hability;
    document.querySelector('.numeroId').textContent = `${id}`;
    colorizarPortipo(type);
}


//Funcion para estilizar los elementos de la busqueda
function colorizarPortipo(type) {
    //llamar al elemento p que contiene el tipo de pokemon
    let tipoDe = document.getElementById('Tipo')
    switch (type) {
        case 'fire':
            $("#Tipo").removeClass();
            tipoDe.classList.add('fire');
            break;
        //2
        case 'grass':
            $("#Tipo").removeClass();
            tipoDe.classList.add('grass')
            break;
        //3
        case 'bug':
            $("#Tipo").removeClass();
            tipoDe.classList.add('bug')
            break;
         //4   
        case 'water':
            $("#Tipo").removeClass();
            tipoDe.classList.add('water');
            break;
        //5        
        case 'normal':
            $("#Tipo").removeClass();
            tipoDe.classList.add('normal');
            break;
         //6       
        case 'rock':
            $("#Tipo").removeClass();
            tipoDe.classList.add('rock');
            break;
        //7           
        case 'steel':
            $("#Tipo").removeClass();
            tipoDe.classList.add('steel');
            break;
        //8                
        case 'poison':
            $("#Tipo").removeClass();
            tipoDe.classList.add('poison');
            break;
        //9
        case 'ground':
            $("#Tipo").removeClass();
            tipoDe.classList.add('ground');
        break;
        //10
        case 'ice':
            $("#Tipo").removeClass();
            tipoDe.classList.add('ice');
            break;
        //11
        case 'dark':
            $("#Tipo").removeClass();
            tipoDe.classList.add('dark');
            break;
        //12
        case 'ghost':
            $("#Tipo").removeClass();
            tipoDe.classList.add('ghost');
            break;
        //13
        case 'fighting':
            $("#Tipo").removeClass();
            tipoDe.classList.add('fighting');
            break;
        //14
        case 'fairy':
            $("#Tipo").removeClass();
            tipoDe.classList.add('fairy');
            break;
        //15
        case 'psychic':
            $("#Tipo").removeClass();
            tipoDe.classList.add('psychic');
            break;
        //16
        case 'dragon':
            $("#Tipo").removeClass();
            tipoDe.classList.add('dragon');
            break;
        //17
        case 'flying':
            $("#Tipo").removeClass();
            tipoDe.classList.add('flying');
            break;

        case 'electric':
            $("#Tipo").removeClass();
            tipoDe.classList.add('electric');
            break;
        }
    }
    
llamarPokemons();


