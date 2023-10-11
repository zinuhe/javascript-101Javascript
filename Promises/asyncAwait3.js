function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Something went wrong')
    }, 1)
  })
}

async function start() {
  try {
    const result = await getData()
    console.log(result)
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
}

start()
