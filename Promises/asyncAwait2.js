async function getDataOld() {
  fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    .then(data => data.json())
    .then(result => {
      console.log(result.properties.periods[1].shortForecast)
    })
}

async function getData() {
  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
  const result = await data.json() // returns a promise
  console.log(result.properties.periods[1].shortForecast)
}

getData()
getDataOld()
