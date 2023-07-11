const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 900,
    // parallax: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Accessibility
      a11y: {
        enabled: false,
      },
    // allowTouchMove: false,
    // focusableElements: 'batton',

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // effect: 'cube',
    // effect: 'fade',
    // effect: 'coverflow',
    // effect: 'flip',
    // effect: 'creative',
    // effect: 'cards',

    autoplay: {
      delay: 4000,
    },
  });
