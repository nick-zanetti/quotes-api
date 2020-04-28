const button = document.querySelector('#button')

const getQuote = () => {
  return fetch('http://quotes.stormconsultancy.co.uk/random.json')
  .then((response) => {
    return response.json()
    .then((parsedResponse) => {
      const quoteText = document.querySelector('#quote');
      quoteText.textContent = `${parsedResponse.author}: "${parsedResponse.quote}"`
    })
  })
}

button.addEventListener('click', (() => {
  getQuote()
}))




