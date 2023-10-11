console.log('POKEMON - GET API CALL')

async function getPokemons() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'
    const response = await fetch(apiUrl)
    const result = await response.json() // function .json() returns a promise, we can use await to assign the response to a variable.

    return result.results;
  }

(async () => {
try {
  const response = await getPokemons()
  console.log('Pokemons:', response)

  // Iterate through the response data
  response.forEach(pokemon => {
    console.log('Name:', pokemon.name)
    console.log('URL:', pokemon.url)
    console.log('')
  })
} catch (error) {
    console.error('Error: ', error)
}
})();
