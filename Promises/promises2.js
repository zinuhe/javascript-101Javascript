function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('404 - From func1')
    }, 500)
  })
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🥸 - From func2')
    }, 500)
  })
}

function onSuccess(data) {
  console.log(`SUCCESS: ${data}`)
}

function onError(error) {
  console.log(`ERROR: ${error}`)
}

function onFinally() {
  console.log('FINALLY DONE')
}

// Different scenarios and combinations give different
// successes or errors as results in different control over the overall flow.
func1()
  .then(onSuccess, onError)
  .then(func2)
  .then(onSuccess)
  // .catch(onError) // Will catch any error in any function and stop the flow
  .finally(onFinally) // runs regardless of whether it was successful or not
