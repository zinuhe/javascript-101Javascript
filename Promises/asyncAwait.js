function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100)
    }, 10)
  })
}

async function start() {
  const result = await getData()
  console.log(result)
}

start()
