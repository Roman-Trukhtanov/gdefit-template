'use strict';

(function () {
  var subMenuToggleList = document.querySelectorAll('.sub-menu__toggle');

  for (var i = 0; i < subMenuToggleList.length; i++) {
    var targetSubMenuToggleItem = subMenuToggleList[i];

    targetSubMenuToggleItem.addEventListener('click', function (evt) {
      if (targetSubMenuToggleItem.classList.contains('sub-menu__toggle--open')) {
        targetSubMenuToggleItem.classList.remove('sub-menu__toggle--open');
      } else {
        targetSubMenuToggleItem.classList.add('sub-menu__toggle--open');
      }
    });
  }
})();
