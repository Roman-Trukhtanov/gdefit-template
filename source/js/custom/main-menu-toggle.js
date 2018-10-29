'use strict';

(function () {
  var mainNavCollapse = document.querySelector('.main-nav__collapse');
  if (mainNavCollapse) {
    mainNavCollapse.classList.remove('main-nav__collapse--nojs');
  }

  var mainNavTrigger = document.querySelector('.main-nav__trigger');

  if (mainNavTrigger) {
    mainNavTrigger.classList.add('collapsed');
  }

  var subMenuList = document.querySelectorAll('.site-nav-list__sub-menu');
  var subMenuToggleList = document.querySelectorAll('.sub-menu__toggle');


  var addSubMenuListClass = function (subMenuList) {
    for (var i = 0; i < subMenuList.length; i++) {
      var tempListItem = subMenuList[i];

      tempListItem.classList.add(('collapse'));
    }
    /*
    subMenuList.forEach(function (it) {
      it.classList.add('collapse');
    });
    */
  };

  var addSubMenuToggleListClass = function (subMenuToggleList) {
    for (var i = 0; i < subMenuToggleList.length; i++) {
      var tempToggleListItem = subMenuToggleList[i];

      tempToggleListItem.classList.add(('collapsed'));
    }
    /*
    subMenuToggleList.forEach(function (it) {
      it.classList.add('collapsed');
    });
    */
  };

  if (subMenuList) {
    addSubMenuListClass(subMenuList);
  }

  if (subMenuToggleList) {
    addSubMenuToggleListClass(subMenuToggleList);
  }
})();
