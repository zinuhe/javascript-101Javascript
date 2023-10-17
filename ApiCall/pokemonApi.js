const url = 'https://pokeapi.co/api/v2/pokemon';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com'
// 	}
// };

async function getPokemons(){
  try {
    // const response = await fetch(url, options);
    const response = await fetch(url);
    const result = await response.text();
    console.log('result:', result);
  } catch (error) {
    console.error(error);
  }
}

getPokemons()