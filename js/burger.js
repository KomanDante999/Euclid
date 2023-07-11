window.addEventListener('DOMContentLoaded', function() {
  //hover
  document.querySelector('#burger').addEventListener('mouseover', function() {
    document.querySelector('#burger').classList.add('burger--hover')
  });
  document.querySelector('#burger').addEventListener('mouseout', function() {
    document.querySelector('#burger').classList.remove('burger--hover')
  });
  //focus
  document.querySelector('#burger').addEventListener('focusin', function() {
    document.querySelector('#burger').classList.add('burger--focus')
  });
  document.querySelector('#burger').addEventListener('focusout', function() {
    document.querySelector('#burger').classList.remove('burger--focus')
  });
  //active
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#burger').classList.toggle('burger--active');
    document.querySelector('#burger').classList.remove('burger--hover');
    document.querySelector('#menu').classList.toggle('header__menu--active')
  });
})
