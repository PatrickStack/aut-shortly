const elUrlShortenerForm = document.querySelector('.js-url-shortener-form')
const elUrlShortenerResults = document.querySelector('..url-shortener__resaultes')

elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('test')

  elUrlShortenerResults.classList.add('url-shortener__resaultes--open');
})
