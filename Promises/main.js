import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Promises</h1>
  </div>
`

let pizza

function orderPizza() {
  console.log('Order Pizza')
  // pizza = 'Chicken'
  setTimeout(() => {
    pizza = 'Chicken'
  }, 2000)
  console.log('Pizza was ordered')
}

orderPizza()
console.log(`Eat ${pizza}`)
