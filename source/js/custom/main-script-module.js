'use strict';

$(document).ready(function(){
  var customNextBtn = '<button class="blog-posts__arrow blog-posts__arrow--next" type="button" aria-label="Следующий слайд">'
    + '<span class="visually-hidden">Следующий слайд</span>'
    + '</button>';
  var customPrevBtn = '<button class="blog-posts__arrow blog-posts__arrow--prev" type="button" aria-label="Предыдущий слайд">'
    + '<span class="visually-hidden">Предыдущий слайд</span>'
    + '</button>';

  $('.blog-posts__slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: true,
    arrows: true,
    nextArrow: customNextBtn,
    prevArrow: customPrevBtn,
    dots: true,
    dotsClass: 'blog-posts__slider-dots',
    accessibility: true,
    centerMode: false,
    infinite: true,
    speed: 450,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 551,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
