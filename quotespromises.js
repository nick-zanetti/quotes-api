const button = document.querySelector('#button')
const quote = document.querySelector("#quote")

const getQuote = () => {
  return fetch('https://type.fit/api/quotes')
  .then((response) => {
    return response.json()
    .then((parsedResponse) => {
      const randQuote = parsedResponse[Math.floor(Math.random() * parsedResponse.length)]
      randQuote.author ? quote.textContent = `${randQuote.author}: "${randQuote.text}"` : quote.textContent = `Unknown: "${randQuote.text}"`
    })
  })
}

button.addEventListener('click', (() => {
  getQuote()
}))




