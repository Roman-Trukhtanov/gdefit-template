'use strict';

(function () {
  var socialLinksToggleItem = document.querySelector('.social-links__toggle');

  var onSocialLinksToggleItemClick = function () {
    if (socialLinksToggleItem.classList.contains('social-links__toggle--active')) {
      socialLinksToggleItem.classList.remove('social-links__toggle--active');
    } else {
      socialLinksToggleItem.classList.add('social-links__toggle--active');
    }
  };

  if (socialLinksToggleItem) {
    socialLinksToggleItem.classList.remove('social-links__toggle--active');

    socialLinksToggleItem.addEventListener('click', onSocialLinksToggleItemClick);
  }
})();
