console.log("POKEMON - SIMPLE API CALL");

// Calling an API using Fetch
async function getPokemons() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const response = await fetch(apiUrl);
    const result = await response.json(); // Because .json() returns a promise, we can use await to assign the response to a variable.
    const pokemons = result.results;

    // console.log(pokemons);
    return pokemons;
  }

// async function will always return a promise and you have to use .then() or await to access its value

// Approach 1: wrapping into an anonymous async function **better.
// If we’re not using modules, or older browsers must be supported
(async () => {
    const response = await getPokemons();
    console.log('Pokemons fetched(1):', response);
})();

// Approach 1*: named function
(async function () {
    const response = await getPokemons();
    console.log('Pokemons fetched(1*):', response);
})();

// Approach 2: .then()
getPokemons()
    .then(response => {
        console.log('Pokemons fetched(2):', response);
    })

