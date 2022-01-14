// function init() {
const select = document.querySelectorAll('.currency')
const btn = document.getElementById('btn')
const input = document.getElementById('input')
const result = document.getElementById('result')

// fetch('https://api.frankfurter.app/currencies')
fetch('https://api.coinbase.com/v2/exchange-rates')
  .then((data) => data.json())
  .then((data) => {
    display(data)
  })


// let currencies = []

// async function getData() {
//   const data = await fetch('https://fixer-fixer-currency-v1.p.rapidapi.com/latest')
//   currencies = await response.json()
//   console.log(data)
//   display(data)
// }

function display(data) {
  const entries = Object.rates(data)
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries}[i][0]">${entries[i][0]}</option>`
    select[1].innerHTML += `<option value="${entries}[i][0]">${entries[i][0]}</option>`
  }
}

btn.addEventListener('click', () => {
// btn.addEventListener('click', btn)
// function updatevalue() {
  const currency1 = select[0].value
  const currency2 = select[1].value
  const value = input.value

  if (currency1 !== currency2) {
    convert(currency1, currency2, value)
  } else {
    alert('Choose Different currencies !!!')
  }
})

function convert(currency1, currency2, value) {
  const host = 'api.frankfurter.app'
  fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((val) => val.json())
    // .catch(error => {
    //   throw(error);
    // })
    .then((val) => {
      console.log(Object.values(val.rates)[0])
      result.value = Object.values(val.rates)[0]
    })
}
//   getCurrencies()
//   setInterval(getCurrencies, 300000)



// }
// window.addEventListener('DOMContentLoaded', init)