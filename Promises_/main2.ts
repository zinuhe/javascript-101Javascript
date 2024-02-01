const first = new Promise((resolve, reject) => {
  resolve("Done-first");
});

const second = new Promise((resolve, error) => {
  resolve("Done-second");
});

first
  .then(resolve => console.log({ resolve }))
  .then(
    () => second.then(result => console.log({ result }))
  );

// const sum = (x: number, y: number): number => x + y;
// console.log(sum(2, 2));

const mult = (x: number) => {
  return new Promise((resolve, reject) => {
    x < 10 ? resolve('Ok') : reject('-Error-')
  });
}

const res = mult(1);
res
  .then(res => console.log(res))
  .catch(error => console.log(error))
