window.addEventListener('DOMContentLoaded', function() {
   document.querySelector('#search-icon').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('form-search--active'),
    document.querySelector('#search-icon').classList.toggle('form-search__icon--active'),
    document.querySelector('#search-img').classList.toggle('form-search__img--active')

  })

})
