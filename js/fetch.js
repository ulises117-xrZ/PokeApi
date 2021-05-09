async function ObtenerPokemons() {
    let peticion = await fetch('https://pokeapi.co/api/v2/type')
    let datos = await peticion.json();
    recorrerArreglo(datos.results)
}

function pokemons(resultado) {
    fetch(`${resultado.url}`);
    
}

function recorrerArreglo(resultados) {
        resultados.forEach(hola => {
        })



}
// pokemons()
ObtenerPokemons()