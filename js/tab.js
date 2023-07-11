window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tab-nav__btn').forEach(function(TabBtn) {
    TabBtn.addEventListener('click', function(Event) {
      const path = Event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-nav__btn').forEach(function(Btn) {
        Btn.classList.remove('tab-nav__btn--active')});
        Event.currentTarget.classList.add('tab-nav__btn--active');

      document.querySelectorAll('.tab-content__item').forEach(function(TabContent) {
        TabContent.classList.remove('tab-content__item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content__item--active')
    });
    // экспеременнтально добавил ховер
    TabBtn.addEventListener('mouseover', function(Hover) {
      Hover.currentTarget.classList.add('tab-nav__btn--hover')
    });
    TabBtn.addEventListener('mouseout', function(Out) {
      Out.currentTarget.classList.remove('tab-nav__btn--hover')
    });
  });

})



