function orderPizza(callback) {
  setTimeout(() => {
    const pizza = 'Chicken Pizza'
    callback(pizza)
  }, 2000)
}

function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log('Call a friend')
