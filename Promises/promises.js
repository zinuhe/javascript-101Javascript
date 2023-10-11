// Promise Maker
function getWeather() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('Sunny')
    }, 1000)
  })
}

// ---------- Promise Receiver - Approach 1 ----------
// const promise = getWeather()
// console.log(promise) // waiting
// promise.then(function(data) {
//   console.log(data)
// })

// promise.then( (data) => {
//   console.log(`Weather: ${data}`)
// })

// ---------- Promise Receiver - Approach 2 ----------
function getWeatherIcon(weather) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case 'Sunny':
          resolve('☀️')
          break
        case 'Cloudy':
          resolve('☁️')
          break
        default:
          reject('NO ICON FIND')
      }
    }, 1000)
  })
}

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(error) {
  console.log(`Error: ${error}`)
}

getWeather().then(onSuccess, onError)

getWeather()
  .then(getWeatherIcon) // data -resolved- from getWeather gets as parameter into getWeatherIcon
  .then(onSuccess, onError)
