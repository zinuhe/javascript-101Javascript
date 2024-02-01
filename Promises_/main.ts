let promise = new Promise(function (resolve, reject) {
  // Executor - Asynchronous code
  // The function is automatically executed when the promise is constructed
  resolve('done');
  // reject('0');
});

/*
 * Arguments `resolve` and `reject` are callbacks.
    resolve(value) – fulfilled, with result `value`
    reject(error) – error, with an error object.
 */

const promise2 = new Promise((resolve_, reject_) => {
  setTimeout(() => resolve_("done"), 1000); // fulfilled
  // setTimeout(() => reject_(new Error("-error message-")), 1000); // error
});

promise2.then(
  result => console.log({ result }),
  error => console.log({ error }) // doesn't execute
);

