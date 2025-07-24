  AOS.init();
const swiper = new Swiper('.parallax-swiper', {
  speed: 1000,
  loop: true,
  parallax: true,         // Enables parallax
  effect: 'fade',         // Enables fade effect
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
const fadeSwiper = new Swiper('.fade-swiper', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.fade-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.fade-next',
    prevEl: '.fade-prev'
  }
});
var mixer = mixitup("#world", {
        animation: {
        duration: 300
    }
});
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
$('.someBlock').preloader({

  // loading text
  text: '', 

  // from 0 to 100 
  percent: '', 

  // duration in ms
  duration: '2000', 

  // z-index property
  zIndex: '', 

  // sets relative position to preloader's parent
  setRelative: false 

  
});

$('.wrapper').slick({

   infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
   dots: true,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
