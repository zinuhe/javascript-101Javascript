const apiUrl = 'http://worldtimeapi.org/api/timezone/America/New_York'
// const apiUrl = 'https://api.weather.gov/gridpoints/OKX/35,35/forecast'

async function getData() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json() // returns a promise
    console.log(data)
  } catch (error) {
    console.log('Error: ', error)
  }
}

getData()
