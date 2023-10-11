const apiUrl = 'http://worldtimeapi.org/api/timezone/America/New_York'
// const apiUrl = 'https://api.weather.gov/gridpoints/OKX/35,35/forecast'

async function getData() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json() // function .json() returns a promise, we can use await to assign the response to a variable.
    console.log(data)
  } catch (error) {
    console.log('Error: ', error)
  }
}

getData()
