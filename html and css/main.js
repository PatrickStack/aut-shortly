const elUrlShortener = document.querySelector('.url-shortener')

const elUrlShortenerForm = document.querySelector('.js-url-shortener-form')
const elUrlShortenerResults = document.querySelector('.url-shortener__resaultes')
const elCopyUrlShorLink = document.querySelector('.js-copy-short-link-button')


elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('test')

  elUrlShortenerResults.classList.add('url-shortener__resaultes--open');
})

elCopyUrlShorLink.addEventListener('click', function () {
  console.log('test')
});

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (evt) {

    if (evt.target.matches('.js-copy-short-link-button')) {
      // change button text
      evt.target.textContent = 'Copied'

      // change button bg color
      evt.target.classList.add('url-shortener__copy-button-copied')
      // time
      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortener__copy-button-copied')
      }, 2000);
    }
  });
}
