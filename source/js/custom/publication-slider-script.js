'use strict';

(function () {
  var sliderItemContainer = document.querySelector(".publication-slider");
  var sliderItemTemplate = document.querySelector("#publication-slider__item-template").content;

  var slidesData = [{
    "slideTitle":"Test slide1"
    ,"slideDescription":"Other description",
    "slideImgSrc":"img/test-slide-1.jpg"
  }, {
    "slideTitle":"Test slide2",
    "slideDescription":"Other description 2",
    "slideImgSrc":"img/test-slide-2.jpg"
  }];

  var fillFragment = function (arr) {
    var fragment = document.createDocumentFragment();

    arr.forEach(function (it) {
      fragment.appendChild(it);
    });

    return fragment;
  };

  var getSliderElement = function (sliderItemData) {
    var sliderItem = sliderItemTemplate.querySelector('.publication-slider__item').cloneNode(true);

    sliderItem.querySelector('.publication-slider__img').src = sliderItemData.slideImgSrc;
    sliderItem.querySelector('.publication-slider__img').alt = sliderItemData.slideTitle;
    sliderItem.querySelector('.publication-slider__desc-title').textContent = sliderItemData.slideTitle;
    sliderItem.querySelector('.publication-slider__desc').textContent = sliderItemData.slideDescription;

    return sliderItem;
  };

  var renderSlides = function (slides) {
    var slideItems = [];

    slides.forEach(function (it) {
      slideItems.push(getSliderElement(it));
    });

    sliderItemContainer.appendChild(fillFragment(slideItems));
  };

  if (slidesData) {
    renderSlides(slidesData);
  }
})();
